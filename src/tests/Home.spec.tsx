import { render, screen } from "@testing-library/react";
import Home from "../pages";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "price_test",
          amount: "R$10,00",
        }}
      />
    );

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
  });
});