import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Login from "./Login";

describe("Given a Login component", () => {
  describe("When it's invoked", () => {
    test("Then it should render two input boxes", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Login />
          </Provider>
        </BrowserRouter>
      );
      const expectedOutput = screen.getByRole("textbox", { name: /username/i });

      expect(expectedOutput).toBeInTheDocument();
    });
  });

  describe("Then it should render a button with login text in it", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    const expectedOutputTwo = screen.getByRole("button", {
      name: /login/i,
    });
    expect(expectedOutputTwo).toBeInTheDocument();
  });
});
