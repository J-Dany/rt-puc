import "@testing-library/jest-dom";
import { createRef } from "react";
import { render, fireEvent } from "@testing-library/react";
import PortalComponent from "../PortalComponent";
import { makeModalDefaultStyleWithTransition } from "../../utils";

// Mock createPortal since we want to test the component in isolation
jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: (node: HTMLElement) => node,
}));

describe("PortalComponent", () => {
  // Test that the component renders its children when open
  it("renders its children when open is true", () => {
    const ref = createRef<HTMLDivElement>();

    const { getByText } = render(
      <PortalComponent
        ref={ref}
        open={true}
        style={makeModalDefaultStyleWithTransition}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    expect(getByText("Test Content")).toBeInTheDocument();
  });

  // Test that the component does not render its children when open is false
  it("does not render its children when open is false", () => {
    const ref = createRef<HTMLDivElement>();

    const { queryByText } = render(
      <PortalComponent
        ref={ref}
        open={false}
        style={makeModalDefaultStyleWithTransition}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );
    expect(queryByText("Test Content")).not.toBeInTheDocument();
  });

  // Test that the onEntered callback is called after entering
  it("calls the onEntered callback after entering", async () => {
    const onEnteredMock = jest.fn();
    const ref = createRef<HTMLDivElement>();

    render(
      <PortalComponent
        ref={ref}
        open={true}
        style={makeModalDefaultStyleWithTransition}
        onEntered={onEnteredMock}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    fireEvent.transitionEnd(ref.current!);
    await new Promise((res) => setTimeout(res, 300));

    // Expect the mock to have been called once the component has entered
    expect(onEnteredMock).toHaveBeenCalled();
  });

  // Test that the onExited callback is called after exiting
  it("calls the onExited callback after exiting", async () => {
    const onExitedMock = jest.fn();
    const ref = createRef<HTMLDivElement>();

    const { rerender } = render(
      <PortalComponent
        ref={ref}
        open={true}
        style={makeModalDefaultStyleWithTransition}
        onExited={onExitedMock}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    fireEvent.transitionEnd(ref.current!);
    await new Promise((res) => setTimeout(res, 300));

    rerender(
      <PortalComponent
        ref={ref}
        open={false}
        style={makeModalDefaultStyleWithTransition}
        onExited={onExitedMock}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    fireEvent.transitionEnd(ref.current!);
    await new Promise((res) => setTimeout(res, 300));

    // Expect the mock to have been called once the component has exited
    expect(onExitedMock).toHaveBeenCalled();
  });

  it("calls the onEntering callback after entering (MOUNTED)", () => {
    const onEnteringMock = jest.fn();
    const ref = createRef<HTMLDivElement>();

    render(
      <PortalComponent
        ref={ref}
        open={true}
        style={makeModalDefaultStyleWithTransition}
        onEntering={onEnteringMock}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    // Expect the mock to have been called once the component has entered
    expect(onEnteringMock).toHaveBeenCalled();
  });

  it("calls the onCloseRequested callback after prop 'open' changed to `false`", async () => {
    const onCloseRequestedMock = jest.fn();
    const ref = createRef<HTMLDivElement>();

    const { rerender } = render(
      <PortalComponent
        ref={ref}
        open={true}
        style={makeModalDefaultStyleWithTransition}
        onCloseRequested={onCloseRequestedMock}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    fireEvent.transitionEnd(ref.current!);
    await new Promise((res) => setTimeout(res, 300));

    rerender(
      <PortalComponent
        ref={ref}
        open={false}
        style={makeModalDefaultStyleWithTransition}
        onCloseRequested={onCloseRequestedMock}
      >
        <div>Test Content</div>
      </PortalComponent>,
    );

    // Expect the mock to have been called once the component has entered
    expect(onCloseRequestedMock).toHaveBeenCalled();
  });
});
