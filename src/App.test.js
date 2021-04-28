import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//test the keys play the correct sounds when clicked
//test the keys play the correct sounds when keyboard pressed

test("when the button 'Q' is pressed, the correct sound corresponding to the link is pressed", () => {
  render(<App />)

  fireEvent.click(getBy)

});

