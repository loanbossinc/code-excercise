import React from "react";
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import Home from "../../components/Home";

describe("Home", () => {
  const wrapper = shallow(<Home />);

  it("should have master div with class name .homePage_wrapper", () => {
    expect(wrapper.find(".homePage_wrapper").exists()).toEqual(true);
  });
  

});
