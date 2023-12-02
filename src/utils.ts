import { STATUS_TYPE } from "./lib/PortalComponent";

export function makeModalDefaultStyleWithAnimation(
  status: STATUS_TYPE
): Partial<React.CSSProperties> {
  return {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animationName: status === "CLOSE_REQUESTED" ? "bounceOut" : "bounceIn",
    animationDuration: "400ms",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    pointerEvents:
      status === "MOUNTED"
        ? "none"
        : status === "ENTERING" || status === "ENTERED"
        ? "all"
        : "none",
    opacity:
      status === "MOUNTED"
        ? 0
        : status === "ENTERING" || status === "ENTERED"
        ? 1
        : 0,
  };
}

export function makeModalDefaultStyleWithTransition(
  status: STATUS_TYPE
): Partial<React.CSSProperties> {
  return {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 200ms ease-in",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    pointerEvents:
      status === "MOUNTED"
        ? "none"
        : status === "ENTERING" || status === "ENTERED"
        ? "all"
        : "none",
    opacity:
      status === "MOUNTED"
        ? 0
        : status === "ENTERING" || status === "ENTERED"
        ? 1
        : 0,
  };
}

export function makeNotificationDefaultStyleWithTransition(
  status: STATUS_TYPE
): Partial<React.CSSProperties> {
  return {
    position: "fixed",
    top: "10px",
    right: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    transition: "all 200ms ease-in",
    zIndex: 999,
    pointerEvents:
      status === "MOUNTED"
        ? "none"
        : status === "ENTERING" || status === "ENTERED"
        ? "all"
        : "none",
    transform:
      status === "MOUNTED"
        ? "translateX(calc(100% + 10px))"
        : status === "ENTERING" || status === "ENTERED"
        ? "translateX(0%)"
        : "translateX(calc(100% + 10px))",
  };
}
