/// <reference types="react" />
import { STATUS_TYPE, ChildrenAsFunction, ContainerProps } from "./PortalComponent";
interface IModalProps {
    children: React.ReactNode | ChildrenAsFunction;
    open: boolean;
    onEntered?: () => void;
    onExited?: () => void;
    onCloseRequested?: () => void;
    onEntering?: () => void;
    style?: (status: STATUS_TYPE) => Partial<React.CSSProperties>;
    containerProps?: ContainerProps;
    container?: HTMLElement;
}
declare const Modal: import("react").ForwardRefExoticComponent<IModalProps & import("react").RefAttributes<HTMLDivElement>>;
export default Modal;
