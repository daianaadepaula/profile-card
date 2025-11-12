import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { UsersRound } from "lucide-react";
import Button from "../app/components/Button";

describe("Button Component", () => {
  it("deve renderizar o texto corretamente", () => {
    render(<Button text="Seguir" />);
    expect(screen.getByText("Seguir")).toBeInTheDocument();
  });

  it("deve executar onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(<Button text="Seguir" onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar o ícone quando passado", () => {
    render(<Button text="Seguir" icon={UsersRound} />);
    expect(screen.getByRole("button")).toContainHTML("svg");
  });
});
