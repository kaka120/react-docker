import { render } from "@testing-library/react";
import Button from "../Button";

describe("Button section is testing", () => {
  it("renders", () => {
    render(<Button text="hello" onClick={() => {}} />);
  });
});