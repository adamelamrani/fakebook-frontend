import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Register from "./Register";
describe("Given a Register component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 6 inputs", () => {
      const inputs = [
        /username/i,
        /password/i,
        /e-mail/i,
        /name/i,
        /surname/i,
        /birthdate/i,
      ];
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Register />
          </Provider>
        </BrowserRouter>
      );
      let expectedOutput = [];
      inputs.forEach((input) => {
        expectedOutput.push(screen.getAllByLabelText(input));
      });
      expect(expectedOutput).toHaveLength(6);
      expectedOutput.forEach(([input]) => {
        expect(input).toBeInTheDocument();
      });
    });
  });
});
