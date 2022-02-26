import { loginUserAction } from "./actionsCreator";

describe("Given a loginUserAction function", () => {
  describe("When it receives an object with username and password", () => {
    test("Then it should return an object with the new state", () => {
      const userData = { username: "Adam", password: "1234" };
      const expectedOutput = { type: "login-user", userData: userData };
      const output = loginUserAction(userData);
      expect(expectedOutput).toEqual(output);
    });
  });
});
