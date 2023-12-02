import type { Meta, StoryObj } from "@storybook/react";
import Modal from "../lib/Modal";
import { STATUS_TYPE } from "../lib/PortalComponent";
import "../animations.css";

type Story = StoryObj<typeof Modal>;
const meta: Meta<typeof Modal> = {
  component: Modal,
  args: {
    open: false,
  },
};

export const Default: Story = {
  parameters: {
    controls: {
      exclude: [
        "onEntering",
        "onEntered",
        "onCloseRequested",
        "onExited",
        "container",
        "containerProps",
        "style",
      ],
    },
  },
  render: (args) => {
    return (
      <Modal open={args.open}>
        <p>Modal Content</p>
      </Modal>
    );
  },
};

export const WithCustomStyle: Story = {
  name: "Custom container style",
  argTypes: {
    children: {
      defaultValue: "Default",
      options: ["Default", "Unfolding children", "Meep Meep children"],
      control: {
        type: "select",
      },
      mapping: {
        Default: <p>Modal Content</p>,
        "Meep Meep children": (
          status: STATUS_TYPE,
          onEnd: () => void
        ): React.ReactNode => {
          return (
            <div
              id="testIdDiv"
              onAnimationEnd={(event: React.AnimationEvent<HTMLDivElement>) => {
                if (event.currentTarget.id === "testIdDiv") {
                  onEnd();
                }
              }}
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, .0)",
                animation:
                  status !== "CLOSE_REQUESTED"
                    ? "fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
                    : "fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  backgroundColor: "white",
                  transform: "translateX(-1500px)",
                  animation:
                    status !== "CLOSE_REQUESTED"
                      ? "roadRunnerIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
                      : "roadRunnerOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
                }}
              >
                Modal Content
              </div>
            </div>
          );
        },
        "Unfolding children": (status: STATUS_TYPE): React.ReactNode => {
          return (
            <div
              style={{
                padding: "16px",
                backgroundColor: "white",
                transform:
                  status !== "CLOSE_REQUESTED" ? "scale(0)" : "scale(1)",
                animation:
                  status !== "CLOSE_REQUESTED"
                    ? "zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
                    : "zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
              }}
            >
              Modal Content
            </div>
          );
        },
      },
    },
    style: {
      defaultValue: "Red background",
      options: ["Red background", "Unfolding", "Meep Meep"],
      control: {
        type: "select",
      },
      mapping: {
        Unfolding: (status: STATUS_TYPE): React.CSSProperties => ({
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
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          transform:
            status !== "CLOSE_REQUESTED" ? "scaleY(.01) scaleX(0)" : "scale(1)",
          animation:
            status !== "CLOSE_REQUESTED"
              ? "unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
              : "unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        }),
        "Meep Meep": (status: STATUS_TYPE): React.CSSProperties => ({
          transform: status !== "CLOSE_REQUESTED" ? "scale(1)" : "",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          animation:
            status !== "CLOSE_REQUESTED"
              ? "unset"
              : "quickScaleDown 0s .5s linear forwards",
        }),
        "Red background": (status: STATUS_TYPE): React.CSSProperties => ({
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
          backgroundColor: "rgba(255, 0, 0, 0.6)",
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
        }),
      },
    },
  },
  parameters: {
    controls: {
      exclude: [
        "onEntering",
        "onEntered",
        "onCloseRequested",
        "onExited",
        "container",
        "containerProps",
      ],
    },
  },
  render: (args) => {
    return (
      <Modal open={args.open} style={args.style}>
        {args.children}
      </Modal>
    );
  },
};

export default meta;
