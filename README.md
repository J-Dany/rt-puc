# RT-PUC (React Transition Portal-based UI Components)

![npm](https://img.shields.io/npm/v/rt-puc)

## Table of Contents

- [Install](#install)
- [Overview](#overview)
  - [Lifecycle](#lifecycle)
  - [PortalComponent](#portalcomponent)
  - [Modal component](#modal)
  - [Notification component](#notification)
- [License](#license)
- [Contacts](#contacts)

## Install

```bash
yarn add rt-puc
# or
npm install rt-puc
```

## Overview

RPUC is a React component library focused on providing portal-based UI components like modals and notifications. These components render their content in a separate part of the DOM tree, ensuring a clear visual separation from the main application interface.

Using these STATUS_TYPES, a React component can manage its rendering and behavior more effectively, particularly for components that need to gracefully enter and exit the UI with animations or transitions. Each status type allows for specific actions and renderings appropriate to that phase of the component's lifecycle. For example, different styles or child components might be rendered based on whether the component is entering, entered, exiting, or exited.

### Lifecycle

The `STATUS_TYPES` are typically used to manage and track the different states or phases that the component goes through during its lifecycle. These states are especially crucial in components that handle animations, transitions, or dynamic styling based on the component's lifecycle.

#### Initial status ("NOT_MOUNT")

The component is not yet mounted or is in an initial state where it is not active. This state is typically used before the component is first rendered or after it has been permanently removed from the UI.

#### Entering state ("ENTERING")

This state indicates that the component is about to enter the view or become active. In a portal component, this could be when the modal or popup is about to open. During this phase, you might initialize animations or transitions.

#### Entered state ("ENTERED")

The component has fully entered the view and is now active or visible. This state is typically set after any entrance animations or transitions have completed. It represents the stable, active state of the component.

#### Exiting state ("CLOSE_REQUESTED")

This state signifies that the component is in the process of leaving the view or becoming inactive. This is where you would trigger any exit animations or cleanup operations. It's a transitional state leading up to the component being effectively removed or hidden.

### PortalComponent

PortalComponent is a React component designed for rendering children into a DOM node outside the parent component's DOM hierarchy. It's ideal for creating modals, dialogs, or any floating elements rendered into specific parts of the DOM. [Modal](#modal) and [Notification](#notification) components are based on this component: they simply forward props to `PortalComponent` and provides some defaults behavior (for example, the default notification will hide after 3 seconds).

You should not directly use this component, prefer [Modal](#modal) and [Notification](#notification).

#### Props

```ts
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
```

### Notification

The `Notification` component is designed to display notifications or alerts. It leverages the [PortalComponent](#portalcomponent) to render these notifications, potentially outside the regular DOM hierarchy, ensuring they are visually distinct from the main application interface.

The component uses a `forwardRef` to provide a ref to the DOM element. It handles auto-closing of the notification based on the `timeout` prop and ensures any cleanup is done properly.

#### Props

```tsx
<Notification
  open={/* ... */} // A boolean indicating whether the notification is visible.
  toggleOpen={/* ... */} // A function to toggle the visibility of the notification.
  timeout={/* ... */} // Duration (in milliseconds) after which the notification automatically closes (default: 3000).
  style={/* ... */} // Function to provide custom styling based on the notification's status.
  containerProps={/* ... */} // Props to be passed to the `PortalComponent`.
  container={/* ... */} // The DOM element where the notification will be rendered.
  onEntering={/* ... */} // Lifecycle callback: function called when component is entering (mounting)
  onEntered={/* ... */} // Lifecycle callback: function called when component is entered (mounted)
  onCloseRequested={/* ... */} // Lifecycle callback: function called when component has requested to be closed (when the prop `open` become `false` when previously was `true`)
  onExited={/* ... */} // Lifecycle callback: function called when component is exited (unmounted)
>
  {children}
</Notification>
```

#### Example

Note: the content of the notification can be either a React node or a function returning a React node.

```tsx
import { useState } from "react";
import { Notification } from "rpuc";

export default function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [showNotification1, setShowNotification1] = useState(false);

  return (
    <>
      <button onClick={() => setShowNotification(true)}>
        Show notification
      </button>
      <button onClick={() => setShowNotification1(true)}></button>
      <Notification
        open={showNotification}
        toggleOpen={() => setShowNotification(false)}
      >
        Hello World
      </Notification>
      <Notification
        open={showNotification1}
        toggleOpen={() => setShowNotification1(false)}
      >
        {(status) => {
          return <p>{status}</p>;
        }}
      </Notification>
    </>
  );
}
```

### Modal

The `Modal` component is used for displaying modal dialogs. Similar to `Notification`, it uses `PortalComponent` for rendering, which helps in separating the modal from the main application UI.

It uses `forwardRef` for ref forwarding. The component manages the body's overflow style to prevent scrolling when the modal is open. It also ensures the proper handling of the modal's lifecycle methods.

#### Props

```tsx
<Modal
  open={/* ... */} // A boolean indicating whether the notification is visible.
  style={/* ... */} // Function to provide custom styling based on the modal's status.
  containerProps={/* ... */} // Props to be passed to the `PortalComponent`.
  container={/* ... */} // The DOM element where the notification will be rendered.
  onEntering={/* ... */} // Lifecycle callback: function called when component is entering (mounting)
  onEntered={/* ... */} // Lifecycle callback: function called when component is entered (mounted)
  onCloseRequested={/* ... */} // Lifecycle callback: function called when component has requested to be closed (when the prop `open` become `false` when previously was `true`)
  onExited={/* ... */} // Lifecycle callback: function called when component is exited (unmounted)
>
  {children}
</Modal>
```

#### Examples

Note: the content of the modal can be either a React node or a function returning a React node.

```tsx
import { useState } from "react";
import { Modal } from "rpuc";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      <button onClick={() => setShowModal1(true)}>Show modal 1</button>
      <Modal open={showModal}>
        <p>Hello World</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
      <Modal open={showModal1}>
        {(status) => {
          return <p>{status}</p>;
        }}
      </Modal>
    </>
  );
}
```

## License

See [LICENSE.md](LICENSE.md).

## Contacts

Do you want some help or you think you have found a bug? Feel free to open as issue or email me at castiglia.daniele@outlook.com.

###### Made by Daniele Castiglia
