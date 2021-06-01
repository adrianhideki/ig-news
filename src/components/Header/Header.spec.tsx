// renderiza um componente de uma maneira virtual e torna possível
// ver o output de um componente
import { render } from "@testing-library/react";
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
    const { getByText, debug } = render(
      <Header />
    );

    // verificando se tem um texto home na dom
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Posts")).toBeInTheDocument();
  });
});
