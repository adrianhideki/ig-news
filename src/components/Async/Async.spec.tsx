import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { Async } from ".";

test("it renders correctly", async () => {
  render(<Async />);

  // síncrona e se n encontra da erro
  expect(screen.getByText("Hello World")).toBeInTheDocument();

  // os métodos find esperam o texto aparecer em tela
  // o find monitora e espera o componente aparecer
  // expect(await screen.findByText("Button")).toBeInTheDocument();

  // await waitFor(() => {
  //   return expect(screen.getByText("Hello World")).toBeInTheDocument();
  // });

  // aguarda que o botão não esteja em tela (desapareça)
  // o query não da erro
  await waitForElementToBeRemoved(screen.queryByText("Test"));
});
