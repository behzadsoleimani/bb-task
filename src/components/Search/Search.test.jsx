import React from 'react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import { Search } from './Search'; // Adjust the import path based on your project structure

describe('Search component', () => {
  afterEach(() => {
    cleanup();
  });
  it('calls onChange prop with input value on change', async () => {
    const handleChange = vi.fn(); // Mock function to simulate onChange prop
    render(<Search onChange={handleChange} />);

    // Target the input element and simulate user typing
    const inputElement = screen.getByPlaceholderText('Search ...');
    fireEvent.change(inputElement, { target: { value: 'test query' } });

    // Expect the mock handleChange to be called once with the correct value
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('test query');
  });
});
