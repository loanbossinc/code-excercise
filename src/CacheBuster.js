/*
    Based on code found at https://dev.to/flexdinesh/cache-busting-a-react-app-22lk.  -- Jonathan Byrne 01/23/2020
*/
import React from "react";
import packageJson from "./meta.json";

global.buildFingerprint = packageJson.buildFingerprint;

class CacheBuster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false, isLatestVersion: true });
  }

  render() {
    const { loading } = this.state;
    return this.props.children({
      loading
    });
  }
}

export default CacheBuster;
