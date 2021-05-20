const config = {
  apiURL: process.env.REACT_APP_API_URL,
  debug: process.env.REACT_APP_DEBUG_CONSOLE === "1",
  versionNumber: process.env.REACT_APP_VERSION_NUMBER || "development"
};

export default config;
