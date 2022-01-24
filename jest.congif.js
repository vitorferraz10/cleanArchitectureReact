module.exports = {
  roots: ['<rootDir/>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testeEnvironment: 'node',
  tranform: {
    '.+\\.ts$': 'ts-jest'
  }
}
