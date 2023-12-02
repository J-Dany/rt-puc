"use client";

import PortalComponent, {
  STATUS_TYPE,
  ChildrenAsFunction,
  ContainerProps,
} from "./PortalComponent";
import { makeModalDefaultStyleWithTransition } from "../utils";
import { forwardRef } from "react";

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

const Modal = forwardRef<HTMLDivElement, IModalProps>(function Modal(
  props,
  ref
) {
  const {
    children,
    open,
    onEntered,
    onExited,
    onCloseRequested,
    onEntering,
    style,
    containerProps,
    container,
  } = props;

  return (
    <PortalComponent
      ref={ref}
      open={open}
      container={container}
      onCloseRequested={onCloseRequested}
      onEntering={onEntering}
      style={(status) =>
        style ? style(status) : makeModalDefaultStyleWithTransition(status)
      }
      onEntered={() => {
        document.body.style.overflow = "hidden";
        onEntered && onEntered();
      }}
      onExited={() => {
        onExited && onExited();
        document.body.style.overflow = "";
      }}
      {...containerProps}
    >
      {children}
    </PortalComponent>
  );
});

export default Modal;
