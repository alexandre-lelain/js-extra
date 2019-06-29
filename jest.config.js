module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
