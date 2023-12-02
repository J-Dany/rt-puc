/// <reference types="react" />
import { STATUS_TYPE, ChildrenAsFunction, ContainerProps } from "./PortalComponent";
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
declare const Notification: import("react").ForwardRefExoticComponent<INotificationProps & import("react").RefAttributes<HTMLDivElement>>;
export default Notification;
