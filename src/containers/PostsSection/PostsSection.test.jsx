import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { PostsSection } from './PostsSection';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';

const mockUsers = {
  1: 'Test1 Name',
  2: 'Test2 Name',
};

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: 'Post Title 1',
    body: 'Desc 1',
  },
  {
    userId: 2,
    id: 2,
    title: 'Post Title 2',
    body: 'Desc 2',
  },
  {
    userId: 1,
    id: 3,
    title: 'Title 3',
    body: 'Desc 3',
  },
];

describe('PostsSection', () => {
  it('filters posts based on search input based on title', async () => {
    render(
      <PostsSection
        users={mockUsers}
        posts={mockPosts}
        setSelectedItem={() => console.log('')}
      />
    );
    const searchInput = screen.getByPlaceholderText('Search ...');
    fireEvent.change(searchInput, { target: { value: 'Post' } });

    expect(screen.getByText('Post Title 1')).toBeInTheDocument();
    expect(screen.getByText('Post Title 2')).toBeInTheDocument();
    expect(screen.queryByText('Title 3')).not.toBeInTheDocument();
  });

  it('filters posts based on search input based on all items', async () => {
    render(
      <PostsSection
        users={mockUsers}
        posts={mockPosts}
        setSelectedItem={() => console.log('')}
      />
    );
    const searchInput = screen.getByPlaceholderText('Search ...');
    fireEvent.change(searchInput, { target: { value: 'Test1' } });

    expect(screen.getByText('Post Title 1')).toBeInTheDocument();
    expect(screen.queryByText('Post Title 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Title 3')).toBeInTheDocument();
  });
});
