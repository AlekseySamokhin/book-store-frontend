import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import { commentService } from '@/api/services';

import { AddComment, CommentItem } from './components';
import { CheckAuth } from '@/components/Containers';

import type { ITypeComment } from '@/interfaces/commentInterfaces';

import { CommentsStyled } from './Comments.styles';

interface ITypeProps {
  className?: string;
}

const socket = io('http://localhost:4000');

const Comments: React.FC<ITypeProps> = (props) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [comments, setComments] = useState<ITypeComment[]>([]);
  const { bookId } = useParams<string>();

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  // eslint-disable-next-line no-console
  console.log(isConnected);

  useEffect(() => {
    (async () => {
      try {
        const comments = await commentService.getComments({
          bookId: Number(bookId),
        });

        setComments(comments);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
  }, [bookId]);

  const addComment = (comments: ITypeComment[]) => {
    setComments(comments);
  };

  return (
    <CommentsStyled className={props.className}>
      <h3 className="comments__title">Comments</h3>

      {comments.map((commentItem) => (
        <CommentItem
          className="comments__item"
          key={commentItem.id}
          comment={commentItem}
        />
      ))}

      <CheckAuth needAuth={true}>
        <AddComment addComment={addComment} className="comments__form" />
      </CheckAuth>
    </CommentsStyled>
  );
};

export { Comments };
