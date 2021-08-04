import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
// Datepicker Provider
// import MomentUtils from "material-ui-pickers/utils/moment-utils";

import createStore from "store";
import "material-icons-font/material-icons-font.css";
import App from "./components/App";
import "./index.css";

const history = createBrowserHistory();
const store = createStore(history);
const theme = createMuiTheme({
  overrides: {
    MuiButton: { text: {} },
    MuiFormLabel: {
      root: {
        fontSize: "17px"
      }
    },
    MuiFormControlLabel: {
      label: {
        fontSize: "17px"
      }
    },
    MuiInput: {
      root: {
        fontSize: "17px"
      },
      formControl: {
        fontSize: "17px"
      }
    },
    MuiTypography: {
      root: {
        fontSize: "17px"
      },
      subheading: {
        fontSize: "17px"
      }
    },
    MuiFormControl: {
      root: {
        fontSize: "17px"
      }
    },
    MuiGrid: {},
    MuiTab: {
      root: {
        backgroundColor: "rgba(100,0,100,0)",
        text: {
          fontSize: "17px"
        }
      }
    },
    MuiIconButton: {
      label: {}
    },
    MuiIcon: {
      root: {}
    },
    MuiTable: {
      root: {
        fontSize: "17px"
      }
    },
    MuiToolbar: {
      root: {
        backgroundColor: "rgba(100,0,100,0)",
      }
    },
    MuiTablePagination: {
      caption: {
        fontSize: "15px"
      },
      select: {
        paddingTop: "3px",
        marginRight: "6px",
        marginBottom: "-5px"
      }
    },
    MuiTableCell: {
      root: {
        fontSize: "17px"
      },
      footer: {

      },
      head: {
        fontSize: "17px"
      },
      body: {
        fontSize: "17px"
      }
    }
  },
  shadows: Array(25).fill("none"),
  palette: {
    primary: {
      light: "#5c5c5c",
      main: "#009DDF",
      dark: "#0c0c0c",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffc949",
      main: "#0f9ad6",
      dark: "#c46900",
      contrastText: "#fff"
    }
  },
  typeogrpahy: {
    htmlFontSize: "17px",
    fontSize: "17px",
    body: {
      fontSize: "17px"
    }

  },
  props: {
    MuiTableRow: {
      hover: false
    }
  }
});

// Commenting this out since not needed for this exercise. - Roman C.
// const generateClassName = createGenerateClassName({
//   productionPrefix: 'v1',
// });

const Root = () => {
  return (// <JssProvider jss={create(jssPreset())} generateClassName={generateClassName}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
        <App history={history} />
        {/* </MuiPickersUtilsProvider> */}
      </MuiThemeProvider>
    </Provider>
    // </JssProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("components/App", () => {
    ReactDOM.render(<Root />, document.getElementById("root"));
  });
}
