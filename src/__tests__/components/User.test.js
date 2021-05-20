import React from "react";
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MainTopNavigation} from "../../components/TopNavigation";
import { cat } from "../../lib/testdata";

configure({adapter: new Adapter()});

describe("User", () => {
  const props = { cat,
    authentication: {
      authed:true,
      authError: 'authError'
    }
   };
  const mockFetch = jest.fn();
  const mockData = {
    asd: "asd"
  };
  const mockD = {
    authed: true
  };

  const wrapper = shallow(
    <MainTopNavigation authData={mockD} errorMessage={mockData} {...props} />
  );    
  console.log(wrapper.instance().props);

  it("should render without throwing an error", () => {
    expect(wrapper.find(".menu_TopPanel").exists()).toEqual(true);
  });

});
