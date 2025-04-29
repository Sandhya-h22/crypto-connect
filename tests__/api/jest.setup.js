import '@testing-library/jest-dom';

// Mock for blockchain interactions
global.crypto = {
  getRandomValues: () => Array.from({ length: 16 }, () => Math.floor(Math.random() * 256)),
};