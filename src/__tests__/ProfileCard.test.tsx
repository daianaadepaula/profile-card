import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileCard from "../app/ProfileCard/ProfileCard";

// Simula o localStorage no ambiente de teste
beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => null);
  Storage.prototype.setItem = jest.fn();
});

describe("ProfileCard", () => {
  it("deve renderizar o nome do usuário", () => {
    render(<ProfileCard />);
    expect(screen.getByText("Ana Silva")).toBeInTheDocument();
  });

  it("deve atualizar o localStorage ao clicar", () => {
    render(<ProfileCard />);
    const followButton = screen.getByRole("button", { name: /seguir/i });

    fireEvent.click(followButton);
    expect(localStorage.setItem).toHaveBeenCalledWith("isFollowing", "true");
  });
});
