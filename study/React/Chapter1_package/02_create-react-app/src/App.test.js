import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /The first step of Eum_mericano's great project/i
  );
  expect(linkElement).toBeInTheDocument();
});
