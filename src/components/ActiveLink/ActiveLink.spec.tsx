// renderiza um componente de uma maneira virtual e torna possível
// ver o output de um componente
import { render } from "@testing-library/react";
import { ActiveLink } from ".";

// mockando a lib next/router para que não apresente erros
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink component", () => {
  // pode usar it ou test
  it("renders correctly", () => {
    const { getByText, debug } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    // verificando se tem um texto home na dom
    expect(getByText("Home")).toBeInTheDocument();
  });

  test("if active link is receiving active class", () => {
    const { getByText, debug } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    // verificando se tem o Home tem uma classe active
    expect(getByText("Home")).toHaveClass("active");
  });
});
