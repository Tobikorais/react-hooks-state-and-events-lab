import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App.js";

test("displays in 'light' mode when initialized", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App.light")).toBeInTheDocument();
});

test("changes to 'dark' mode when the button is clicked", () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText(/ Mode/));
  expect(container.querySelector(".App.dark")).not.toBeNull(); // Ensure the element exists
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { container } = render(<App />);
  fireEvent.click(screen.getByText(/ Mode/));
  expect(container.querySelector(".App.dark")).not.toBeNull(); // Ensure the element exists
  fireEvent.click(screen.getByText(/ Mode/));
  expect(container.querySelector(".App.light")).not.toBeNull(); // Ensure it reverts to light mode
});
