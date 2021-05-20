module.exports = {
  module: {
    rules: [
      {
        test: /pdf\.worker/,
        use: "worker-loader"
      }
    ]
  }
};
