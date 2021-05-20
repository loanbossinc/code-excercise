import React from "react";
import {configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { App } from "../components/App";
import { cat } from "../lib/testdata";


describe("App", () => {
  const props = { 
    cat,
    loading: {
    },
    authentication: {
      authed:true,
      authError:'autherror'
    },
    history: {}  
  };
  const mockFetch = jest.fn();

  const wrapper = shallow(<App checkAuth={mockFetch} {...props} />);

  it("Received userAuth props", () => {
    const userAuth = [];
    expect(wrapper).toBeDefined();
    expect(mockFetch).toHaveBeenCalled();
    expect(mockFetch.mock.calls[0]).toEqual(userAuth);
  });

  it("div.router_root rendered", () => {
    expect(wrapper.find(".router_root").exists()).toEqual(false);
  });

  it(`Should mount and state should not have error`, () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state("hasError")).toEqual(false);
  });    
});
