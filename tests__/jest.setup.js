import '@testing-library/jest-dom';

// Mock for window.crypto
global.crypto = {
  getRandomValues: (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
  },
  subtle: {}
};

// Other global mocks can go here