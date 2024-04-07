import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PostCard } from './PostCard';

describe('PostCard', () => {
  it('renders the PostCard component with given props', () => {
    const mockProps = {
      title: 'Test Title',
      description: 'Test Description',
      selected: false,
      onClick: vi.fn(), // Mock function to test click interaction
      subTitle: 'Test Subtitle',
    };

    render(<PostCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subTitle)).toBeInTheDocument();
    expect(screen.getByAltText(mockProps.title)).toHaveAttribute('src', `https://avatar.iran.liara.run/public?${mockProps.title}`);
  });

  it('calls onClick prop when clicked', async () => {
    const user = userEvent.setup();
    const mockProps = {
      title: 'Clickable Title',
      description: 'Clickable Description',
      selected: false,
      onClick: vi.fn(),
      subTitle: 'Clickable Subtitle',
    };

    render(<PostCard {...mockProps} />);
    const postCardElement = screen.getByText(mockProps.title).closest('div');
    if (postCardElement) {
      await user.click(postCardElement);
      expect(mockProps.onClick).toHaveBeenCalled();
    }
  });
});
