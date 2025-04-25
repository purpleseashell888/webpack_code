module.exports = {
  // 能够编译ES6语法
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: "3",
          proposals: true,
        },
      },
    ],
  ],
};
