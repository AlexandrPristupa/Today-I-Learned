module.exports = {
  globals: {
    NODE_ENV: "test",
    axios: "axios"
  },
  verbose: true,
  moduleDirectories: [
    "node_modules",
    "public/source"
  ],
  testMatch: [
    "<rootDir>/__tests__/**/*.spec.js",
  ],
  transform: {
    "^.+\\.(js|jsx|es6)$": "babel-jest",
    "^.+\\.(css|scss|less)$": "jest-css-modules"
  },
  setupFiles: [
    "<rootDir>/jest.globals.js"
  ],
  coverageDirectory: "<rootDir>/__tests__/coverage",
  reporters: [
    "jest-tap-reporter"
  ],
  moduleFileExtensions: ["js", "jsx", "es6"]
};
