import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";

describe("JobCard tests", () => {
  it("should render", () => {
    expect(render(<JobCard />)).toBeTruthy();
  });
});
