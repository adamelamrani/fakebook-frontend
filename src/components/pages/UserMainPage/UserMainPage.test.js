import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import UserMainPage from "./UserMainPage";

describe("Given a UserMainPage component", () => {
  describe("When it's instanciated", () => {
    test("Then it should render two headings and a list", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserMainPage />
          </Provider>
        </BrowserRouter>
      );
      const expectedHeadingOne = /fakebook/i;
      const expectedHeadingTwo = /People around you/i;

      const expectedOutputOne = screen.getByRole("heading", {
        name: expectedHeadingOne,
      });
      const expectedOutputTwo = screen.getByRole("heading", {
        name: expectedHeadingTwo,
      });

      const expectedList = screen.getByRole("list");

      expect(expectedOutputOne).toBeInTheDocument();
      expect(expectedOutputTwo).toBeInTheDocument();
      expect(expectedList).toBeInTheDocument();
    });
  });
});
