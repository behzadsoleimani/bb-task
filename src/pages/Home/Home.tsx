import { Container } from "@mui/material";
import { PostCard } from "../../components/PostCard";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { fetchPosts } from "../../store/postsSlice";
import { Root } from "./Home.styles";
import { Post } from "../../utils/types";
import { fetchComments } from "../../store/commentsSlice";

export const Home = () => {
  const [selectedItem, setSelectedItem] = useState<Post>();
  const { posts } = useAppSelector((state) => state.posts);
  const { users } = useAppSelector((state) => state.users);
  const { comments } = useAppSelector((state) => state.comments);
  console.log(users);

  const handleCardClick = (post: Post) => {
    setSelectedItem(post);
  };

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
        <ul>
          {posts.map((post) => (
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
      </Container>
      <Container className="container comments-section">
        <ul>
          {selectedItem
            ? comments.map((comment) => (
                <PostCard
                  title={comment.name}
                  description={comment.body}
                  key={comment.id}
                  subTitle={comment.email}
                />
              ))
            : null}
        </ul>
      </Container>
    </Root>
  );
};
