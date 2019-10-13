import React from "react";
import { shallow } from "enzyme";
import ViewCard from "./ViewCard";

describe("ViewCard", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ViewCard />);

    expect(wrapper).toMatchSnapshot();
  });

  if (
    ("sould header is true",
    () => {
      const wrapper = shallow(<ViewCard />);
      const res = wrapper.find("h3");
      expect(res).toBe("Existing Cards");
    })
  );

  if (
    ("sould render table",
    () => {
      const wrapper = shallow(<ViewCard />);
      const res = wrapper.find("table");
      expect(res).toBeTruthy();
    })
  );
});
