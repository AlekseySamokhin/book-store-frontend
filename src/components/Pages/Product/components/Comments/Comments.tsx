/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { commentService } from '@/api/services';

// import { commentsData } from '@/api/fakeApi/comments';

import { AddComment, CommentItem } from './components';

import { CheckAuth } from '@/components/Containers';

import { CommentsStyled } from './Comments.styled';

import type { ITypeComment } from '@/interfaces/commentInterfaces';

interface ITypesProps {
  className?: string;
}

const Comments: React.FC<ITypesProps> = (props): JSX.Element => {
  const { bookId } = useParams<string>();
  const [comments, setComments] = useState<ITypeComment[]>([]);

  console.log(comments);

  useEffect(() => {
    (async () => {
      try {
        const comments = await commentService.getComments({
          bookId: Number(bookId),
        });

        setComments(comments);
      } catch (err) {
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
