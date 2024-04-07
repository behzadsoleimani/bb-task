import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const httpService = axios.create({
  baseURL: BASE_URL,
});

export const getAllPosts = () =>
  httpService.get('/posts').then(({ data }) => data);

export const getAllUsers = () =>
  httpService.get('/users').then(({ data }) => data);

export const getCommentsByPostId = (postId: number) =>
  httpService.get(`/comments?postId=${postId}`).then(({ data }) => data);
