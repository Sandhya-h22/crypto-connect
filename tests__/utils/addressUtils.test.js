import { shortenAddress, validateAddress } from '../../utils/addressUtils'; // Adjust path

describe('Blockchain Address Utilities', () => {
  test('shortenAddress shortens addresses correctly', () => {
    const address = '0x1234567890abcdef1234567890abcdef12345678';
    const shortened = shortenAddress(address);
    
    // Should produce something like 0x1234...5678
    expect(shortened).toMatch(/0x1234\.{3}5678/);
    expect(shortened.length).toBeLessThan(address.length);
  });

  test('validateAddress returns true for valid addresses', () => {
    // Test for a valid Ethereum address with checksum
    expect(validateAddress('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed')).toBe(true);
    
    // Test for a valid Ethereum address without checksum
    expect(validateAddress('0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed')).toBe(true);
  });

  test('validateAddress returns false for invalid addresses', () => {
    // Wrong length
    expect(validateAddress('0x5aAeb6053F3E94C9b9A09f33')).toBe(false);
    
    // Not starting with 0x
    expect(validateAddress('5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed')).toBe(false);
    
    // Invalid characters
    expect(validateAddress('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAeZ')).toBe(false);
  });
});