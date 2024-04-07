import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CommentCard } from './CommentCard';

describe('CommentCard', () => {
  it('renders the CommentCard component with given props', () => {
    const mockProps = {
      title: 'Test Title',
      description: 'Test Description',
    };

    render(<CommentCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeTruthy();
    expect(screen.getByText(mockProps.description)).toBeTruthy();
  });
});
