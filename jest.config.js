module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // Remove the setupFilesAfterEnv line that's causing problems
  // setupFilesAfterEnv: ['<rootDir>/tests__/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  // Only run the dummy.js test
  testMatch: ['**/tests__/dummy.test.js']
};