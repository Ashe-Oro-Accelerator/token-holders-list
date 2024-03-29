import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@src(.*)$': '<rootDir>/src/test$1',
    '^@mocks(.*)$': '<rootDir>/src/test/__mocks__$1',
  },
  roots: ['<rootDir>/src'],
  testMatch: ['**/src/test/**/*.(spec|test).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
