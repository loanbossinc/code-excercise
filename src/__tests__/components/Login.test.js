import React from "react";
import {configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from "../../components/Login";
import { cat } from "../../lib/testdata";

configure({adapter: new Adapter()});
describe("Login", () => {
  const props = { cat ,     
    loading: {
      authentication: true
    },
    authentication: {
      authed:true,
      authError: 'authError'
    },
   classes: {
     white: '#FFF'
   },
   errors: {
     email: 'test_email',
     password: 'password'
   },
    touched: {
      email: 'touched_email'
    },
  values: {
    email: 'values_email'
  }};
  const errorMessage_mock = {
    login: {
      email: "test@gmail.com",
      password: "123456"
    }
  };


  const authData_mock = {
    errorMessage: "no error"
  };
  
  const wrapper = shallow(<Login
      authData={authData_mock}
      errorMessage={errorMessage_mock}
      {...props}
    />
  );

  it("should render without throwing an error", () => {
    expect(wrapper.find(".login_Panel").exists()).toEqual(true);
  });

});
