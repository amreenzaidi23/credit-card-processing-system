import React from "react";
import { shallow } from "enzyme";
import AddCard from "./AddCard";
describe("AddCard", () => {
  it("should render my component", () => {
    const wrapper = shallow(<AddCard />);
  });

  it("should contains submit", () => {
    const wrapper = shallow(<AddCard />);
    const res = wrapper.find("button");
    expect(res).toBe("Submit");
  });

  it("should luhn check false with wrong data", () => {
    expect(luhn_checksum(1233)).toBeFalsy();
  });

  it("should luhn check true with right data", () => {
    expect(luhn_checksum(5500000000000004)).toBeTruthy();
  });
});
