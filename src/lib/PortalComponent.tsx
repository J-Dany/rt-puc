"use client";

import {
  forwardRef,
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { createPortal } from "react-dom";

type PropsType = IPortalComponentProps & ContainerProps;
export type ChildrenAsFunction = (status: STATUS_TYPE, onEnd?: () => void) => React.ReactNode;
export type ContainerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "ref" | "onTransitionEnd" | "onAnimationEnd" | "style" | "children"
>;

export type STATUS_TYPE =
  | "MOUNTED"
  | "NOT_MOUNT"
  | "ENTERING"
  | "ENTERED"
  | "CLOSE_REQUESTED";

interface IPortalComponentProps {
  /**
   * The content to be rendered inside the portal. It can be a React node or a function that returns a React node.
   */
  children: React.ReactNode | ChildrenAsFunction;

  /**
   * A function that receives the component's current status and returns CSS properties to apply to the portal.
   * 
   * @param status
   */
  style: (status: STATUS_TYPE) => React.CSSProperties;

  /**
   * A flag indicating whether the portal content should be mounted and visible.
   */
  open: boolean;

  /**
   * The DOM element in which the portal content will be rendered. Defaults to document.body.
   */
  container?: HTMLElement;

  /**
   * Callback fired when the portal content has finished entering.
   */
  onEntered?: () => void;

  /**
   * Callback fired when the portal content starts entering.
   */
  onEntering?: () => void;

  /**
   * Callback fired when the portal content has finished exiting.
   */
  onExited?: () => void;

  /**
   * Callback fired when a close of the portal content is requested.
   */
  onCloseRequested?: () => void;
}

/**
 * `PortalComponent`: A React component for rendering children into a DOM node that exists outside the DOM hierarchy of the parent component.
 * This component is particularly useful for creating modals, dialogs, or any floating elements that should be rendered into a specific part of the DOM, 
 * independent of the parent component's hierarchy.
 * 
 * Props:
 * - `children`: React.ReactNode | ChildrenAsFunction - The content to be rendered inside the portal. It can be a React node or a function that returns a React node.
 * - `style`: (status: STATUS_TYPE) => React.CSSProperties - A function that receives the component's current status and returns CSS properties to apply to the portal.
 * - `open`: boolean - A flag indicating whether the portal content should be mounted and visible.
 * - `container`: HTMLElement (optional) - The DOM element in which the portal content will be rendered. Defaults to document.body.
 * - `onEntered`: () => void (optional) - Callback fired when the portal content has finished entering.
 * - `onEntering`: () => void (optional) - Callback fired when the portal content starts entering.
 * - `onExited`: () => void (optional) - Callback fired when the portal content has finished exiting.
 * - `onCloseRequested`: () => void (optional) - Callback fired when a close of the portal content is requested.
 * 
 * Component Lifecycle:
 * - The component uses the `open` prop to manage its lifecycle, transitioning through various statuses ('MOUNTED', 'ENTERING', etc; see STATUS_TYPES).
 * - It handles the mounting and unmounting of the portal content based on the `open` prop.
 * - Animation and transition events are used to trigger callbacks and update the component's status.
 * 
 * Usage:
 * <PortalComponent
 *   open={isOpen}
 *   onEntered={() => console.log('Entered')}
 *   style={(status) => ({ opacity: status === 'ENTERED' ? 1 : 0 })}
 * >
 *   <p>Portal Content</p>
 * </PortalComponent>
 * 
 * Note: This component uses `forwardRef` to optionally accept a ref from its parent, allowing for more flexible integration in various use cases.
 */
const PortalComponent = forwardRef<HTMLDivElement, PropsType>(
  function PortalComponent(props, ref) {
    const {
      children,
      open,
      style,
      onEntered,
      onExited,
      onCloseRequested,
      onEntering,
      container = typeof window !== "undefined" ? window.document.body : undefined,
      ...divProps
    } = props;
    const internalRef = useRef<HTMLDivElement | null>(null);
    const [status, setStatus] = useState<STATUS_TYPE>(
      open ? "MOUNTED" : "NOT_MOUNT"
    );

    const realRef = useMemo(() => {
      if (ref && typeof ref !== "function") {
        return ref;
      }

      return internalRef;
    }, [ref]);

    const onEnd = useCallback(() => {
      if (open && status === "ENTERING") {
        setStatus("ENTERED");

        onEntered && onEntered();
      } else if (!open && status === "CLOSE_REQUESTED") {
        // HERE END CLOSE TRANSITION

        // REFLOW
        (() => realRef?.current?.scrollTop)();

        setStatus("NOT_MOUNT");
        setTimeout(() => {
          onExited && onExited();
        }, 0);
      }
    }, [open, status, onEntered, onExited]);

    const onTransitionEnd = useCallback(
      (event: React.TransitionEvent<HTMLDivElement>) => {
        if (event.target === realRef.current) {
          onEnd();
        }
      },
      [onEnd, realRef]
    );

    const onAnimationEnd = useCallback(
      (event: React.AnimationEvent<HTMLDivElement>) => {
        if (event.target === realRef.current) {
          onEnd();
        }
      },
      [onEnd, realRef]
    );

    useEffect(() => {
      if (status === "NOT_MOUNT" && open) {
        setStatus("MOUNTED");
      } else if (status === "MOUNTED") {
        // REFLOW
        (() => realRef?.current?.scrollTop)();

        setStatus("ENTERING");
        onEntering && onEntering();
      } else if (!open && status === "ENTERED") {
        // REQUESTED CLOSE

        // REFLOW
        (() => realRef?.current?.scrollTop)();

        setStatus("CLOSE_REQUESTED");
        onCloseRequested && onCloseRequested();
      }
    }, [open, status, onCloseRequested, onEntering]);

    if (!container) {
      return null;
    }

    if (status === "NOT_MOUNT") {
      return null;
    }

    return createPortal(
      <div
        ref={realRef}
        style={style(status)}
        onAnimationEnd={onAnimationEnd}
        onTransitionEnd={onTransitionEnd}
        {...divProps}
      >
        {typeof children === "function" ? children(status, onEnd) : children}
      </div>,
      container
    );
  }
);

export default PortalComponent;
