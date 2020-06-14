
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm, {register, errors} from "./components/ContactForm"

test("renders App without crashing", () => {
  render(<App />);
});



    describe("last name has value", () => {
      test("lastname has value", () => {
        expect(register("Taylor")).min(1)
      })
    })