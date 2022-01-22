import { InitialOptionsTsJest } from 'ts-jest'

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      // disable type check since we do it in separate commands
      diagnostics: false
    }
  },
  preset: 'ts-jest', // 'ts-jest/presets/js-with-ts'
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],
  moduleNameMapper: {
    '\\.(css|png)$': 'jest-transform-stub'
  }
}

export default config
