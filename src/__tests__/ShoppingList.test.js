import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList.js";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
  const { container } = render(<ShoppingList items={testData} />);
  expect(container.querySelector(".Items").children).toHaveLength(
    testData.length
  );
});

test("displays only items that match the selected category", () => {
  const { container } = render(<ShoppingList />);
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dairy" },
  });
  expect(container.querySelectorAll(".Items li")).toHaveLength(2); // Ensure correct filtering
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "Dessert" },
  });
  expect(container.querySelectorAll(".Items li")).toHaveLength(1); // Ensure correct filtering
});
