// renderiza um componente de uma maneira virtual e torna possível
// ver o output de um componente
import { render, screen } from "@testing-library/react";
import { Header } from ".";

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

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("Header component", () => {
  // pode usar it ou test
  it("renders correctly", () => {
    render(
      <Header />
    );

    // verificando se tem um texto home na dom
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
