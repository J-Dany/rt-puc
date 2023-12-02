"use client";

import { forwardRef, useRef } from "react";
import PortalComponent, {
  STATUS_TYPE,
  ChildrenAsFunction,
  ContainerProps,
} from "./PortalComponent";
import { makeNotificationDefaultStyleWithTransition } from "../utils";

interface INotificationProps {
  children: React.ReactNode | ChildrenAsFunction;
  open: boolean;
  toggleOpen: () => void;
  onEntered?: () => void;
  onExited?: () => void;
  onCloseRequested?: () => void;
  onEntering?: () => void;
  timeout?: number;
  style?: (status: STATUS_TYPE) => Partial<React.CSSProperties>;
  containerProps?: ContainerProps;
  container?: HTMLElement;
}

const Notification = forwardRef<HTMLDivElement, INotificationProps>(
  function Notification(props, ref) {
    const {
      children,
      open,
      toggleOpen,
      onEntered,
      onExited,
      onCloseRequested,
      onEntering,
      style,
      containerProps,
      container,
      timeout = 3000,
    } = props;
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    return (
      <PortalComponent
        ref={ref}
        open={open}
        container={container}
        onEntering={onEntering}
        onCloseRequested={onCloseRequested}
        style={(status) =>
          style
            ? style(status)
            : makeNotificationDefaultStyleWithTransition(status)
        }
        onEntered={() => {
          timeoutId.current = setTimeout(() => {
            toggleOpen();
          }, timeout);
          onEntered && onEntered();
        }}
        onExited={() => {
          if (timeoutId.current) {
            clearTimeout(timeoutId.current);
          }

          onExited && onExited();
          setTimeout(() => {
            toggleOpen();
          }, 0);
        }}
        {...containerProps}
      >
        {children}
      </PortalComponent>
    );
  }
);

export default Notification;
