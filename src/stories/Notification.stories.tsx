import type { Meta, StoryObj } from "@storybook/react";
import Notification from "../lib/Notification";
import { useArgs } from "@storybook/preview-api";
import { STATUS_TYPE } from "../lib";
import React from "react";

type Story = StoryObj<typeof Notification>;
const meta: Meta<typeof Notification> = {
  component: Notification,
  args: {
    open: false,
    timeout: 3000,
  },
  argTypes: {
    timeout: {
      description: "Automatically close after this timeout (in milliseconds)",
    },
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
        "toggleOpen",
      ],
    },
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <Notification
        timeout={args.timeout}
        open={args.open}
        toggleOpen={() => updateArgs({ open: false })}
      >
        <p>Notification content</p>
      </Notification>
    );
  },
};

export const WithCustomStyle: Story = {
  name: "Custom container style",
  parameters: {
    controls: {
      exclude: [
        "onEntering",
        "onEntered",
        "onCloseRequested",
        "onExited",
        "container",
        "containerProps",
        "toggleOpen",
      ],
    },
  },
  argTypes: {
    children: {
      options: ["Default"],
      control: {
        type: "select",
      },
      mapping: {
        Default: <p style={{ margin: 0 }}>Notification content</p>,
      },
    },
    style: {
      options: ["Custom"],
      control: {
        type: "select",
      },
      mapping: {
        Custom: (status: STATUS_TYPE): React.CSSProperties => ({
          position: "fixed",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "16px",
          transition: "all 200ms ease-in",
          zIndex: 999,
          boxShadow:
            "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
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
        }),
      },
    },
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <Notification
        open={args.open}
        timeout={args.timeout}
        style={args.style}
        toggleOpen={() => updateArgs({ open: false })}
      >
        {args.children}
      </Notification>
    );
  },
};

export default meta;
