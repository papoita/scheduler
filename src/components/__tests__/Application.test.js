import React from "react";

import { render, cleanup, waitForElement, fireEvent } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

// # testing plan
// Render the Application.
// Wait until the text "Archie Cohen" is displayed.
// Click the "Add" button on the first empty appointment.
// Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
// Click the first interviewer in the list.
// Click the "Save" button on that same appointment.
// Check that the element with the text "Saving" is displayed.
// Wait until the element with the text "Lydia Miller-Jones" is displayed.
// Check that the DayListItem with the text "Monday" also has the text "no spots remaining"

describe("Application", () => {
it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });
});
});
