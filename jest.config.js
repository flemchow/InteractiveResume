module.exports = {
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.ts",
  },
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  testRegex: ".*\\.(test|spec)\\.(ts|tsx|js)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/service/",
    ".*\\.snapshots\\.ts",
  ],
};
