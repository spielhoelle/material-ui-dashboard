import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { createShallow } from "material-ui/test-utils";
import Decider from "./Decider";
import TextField from "material-ui/TextField";

configure({ adapter: new Adapter() });

describe("Decider ", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it("should render a <div />", () => {
    const wrapper = shallow(<Decider />);
    console.log(wrapper.debug());
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <Button />", () => {
    const wrapper = shallow(<Decider />);
    expect(wrapper.find("WithStyles(Button)").length).toEqual(1);
  });

  it("should render two <Textfield />", () => {
    const wrapper = shallow(<Decider />);
    expect(wrapper.find(TextField).length).toEqual(2);
  });
});

// it should be a material-ui card
// it should have a title
// it should have two input fields
// it should have one button
