/// <reference types="react" />
export type ChildrenAsFunction = (status: STATUS_TYPE, onEnd?: () => void) => React.ReactNode;
export type ContainerProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref" | "onTransitionEnd" | "onAnimationEnd" | "style" | "children">;
export type STATUS_TYPE = "MOUNTED" | "NOT_MOUNT" | "ENTERING" | "ENTERED" | "CLOSE_REQUESTED";
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
declare const PortalComponent: import("react").ForwardRefExoticComponent<IPortalComponentProps & ContainerProps & import("react").RefAttributes<HTMLDivElement>>;
export default PortalComponent;
