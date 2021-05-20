import React from "react";
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {Companies} from "../../../components/Admin/Companies";
import {CompaniesTable} from "../../../components/Admin/Companies/CompaniesTable";

describe("Companies", () => {    
  const wrapper = shallow(<Companies />);
  
  it("should exist", () => {
    expect(wrapper.exists()).toEqual(true);
  });
  
});
