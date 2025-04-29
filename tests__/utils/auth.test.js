import { verifySignature } from '../../utils/auth'; // Adjust path

// Mock crypto functions for testing
jest.mock('../../utils/crypto', () => ({
  verifyMessage: jest.fn((message, signature, publicKey) => {
    // Simple mock that returns true only for specific test values
    if (message === 'login-message' && 
        signature === 'valid-signature' && 
        publicKey === 'user-public-key') {
      return true;
    }
    return false;
  })
}));

describe('Authentication Utilities', () => {
  test('verifySignature returns true for valid signatures', () => {
    const result = verifySignature(
      'login-message',
      'valid-signature',
      'user-public-key'
    );
    expect(result).toBe(true);
  });

  test('verifySignature returns false for invalid signatures', () => {
    const result = verifySignature(
      'login-message',
      'invalid-signature',
      'user-public-key'
    );
    expect(result).toBe(false);
  });
});