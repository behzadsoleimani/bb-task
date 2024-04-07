import { Pagination } from '@mui/material';
import { PostCard } from '../../components/PostCard';
import { useState } from 'react';
import { Post } from '../../utils/types';
import { Search } from '../../components/Search';
import { getFilteredPosts } from './PostsSection.helpers';
import { PostsSectionProps } from './PostsSection.types';
import { Filter } from './PostsSection.styles';

const PAGE_SIZE = 10;

export const PostsSection = (props: PostsSectionProps) => {
  const { posts, users, setSelectedItem, selectedItem } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const handleCardClick = (post: Post) => {
    setSelectedItem(post);
  };

  const handlePageChange = (_: any, value: number) => {
    setCurrentPage(value);
  };

  const handleFilterPosts = (value: string) => {
    setSearchValue(value.toLowerCase());
  };

  const filteredItems = getFilteredPosts(searchValue, posts, users);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedPosts = filteredItems.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );
  const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);

  return (
    <>
      <Filter>
        <Search onChange={handleFilterPosts} />
      </Filter>
      <ul className="list">
        {paginatedPosts.map((post) => (
          <PostCard
            title={post.title}
            description={post.body}
            key={post.id}
            subTitle={`Author : ${users[post.userId]}`}
            selected={post.id === selectedItem?.id}
            onClick={() => handleCardClick(post)}
          />
        ))}
      </ul>
      {totalPages > 0 && (
        <Pagination
          count={totalPages}
          className="pagination"
          page={currentPage}
          onChange={handlePageChange}
          color="standard"
        />
      )}
    </>
  );
};
