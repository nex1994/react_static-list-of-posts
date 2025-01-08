import { Comment } from './Comments';
import { User } from './User';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comment: Comment[];
  user: User | null;
}
