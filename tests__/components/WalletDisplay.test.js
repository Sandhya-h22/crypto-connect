import React from 'react';
import { render, screen } from '@testing-library/react';
import WalletDisplay from '../../components/WalletDisplay'; // Adjust path as needed

// This test checks if the wallet address is properly displayed
describe('WalletDisplay Component', () => {
  test('displays wallet address correctly', () => {
    // Arrange - prepare test data
    const walletAddress = '0x1234567890abcdef1234567890abcdef12345678';
    
    // Act - render the component
    render(<WalletDisplay address={walletAddress} />);
    
    // Assert - check if address is displayed (possibly truncated)
    // The component might show a shortened version like 0x1234...5678
    expect(screen.getByText(/0x1234/)).toBeInTheDocument();
    expect(screen.getByText(/5678/)).toBeInTheDocument();
  });

  test('shows copy button', () => {
    render(<WalletDisplay address="0x1234567890abcdef" />);
    const copyButton = screen.getByRole('button', { name: /copy/i });
    expect(copyButton).toBeInTheDocument();
  });
});