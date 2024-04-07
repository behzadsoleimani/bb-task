import { CircularProgress, Container } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../../store/postsSlice';
import { Root } from './Home.styles';
import { Post } from '../../utils/types';
import { fetchComments } from '../../store/commentsSlice';
import { CommentCard } from '../../components/CommentCard';
import { PostsSection } from '../../containers/PostsSection';


export const Home = () => {
  const [selectedItem, setSelectedItem] = useState<Post>();
  const { posts, loadingStatus: postLoadingStatus } = useAppSelector(
    (state) => state.posts
  );
  const { users } = useAppSelector((state) => state.users);
  const { comments } = useAppSelector((state) => state.comments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (selectedItem?.id) dispatch(fetchComments(selectedItem?.id));
  }, [dispatch, selectedItem?.id]);

  return (
    <Root elevation={0}>
      <Container className="container posts-section">
        
        {postLoadingStatus === 'success' ? (
          <PostsSection posts={posts} users={users} setSelectedItem={setSelectedItem}
          selectedItem={selectedItem} />
        ) : (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
      </Container>
      <Container className="container comments-section">
        <ul className="list">
          {selectedItem
            ? comments.map((comment) => (
                <CommentCard
                  title={comment.email}
                  description={comment.body}
                  key={comment.id}
                />
              ))
            : null}
        </ul>
      </Container>
    </Root>
  );
};
