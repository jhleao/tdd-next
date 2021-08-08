/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  bail: 4,
  collectCoverage: false,
  collectCoverageFrom: ['src/**', '!src/@types/**'],
  coverageDirectory: '<rootDir>/src/tests/coverage',
  coverageProvider: 'babel',
  testEnvironment: 'jsdom',
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/index.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  verbose: true,
};
