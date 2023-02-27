/* eslint-disable no-console */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

// import { commentService } from '@/api/services';

import { useAppSelector } from '@/redux/store';

import { Button } from '@/components/ui';

import { AddCommentStyled } from './AddComment.styles';

import type { ITypeComment } from '@/interfaces/commentInterfaces';

interface ITypesProps {
  addComment: (comment: ITypeComment[]) => void;
  className?: string;
}

const socket = io('http://localhost:4000');

const AddComment: React.FC<ITypesProps> = (props): JSX.Element => {
  const user = useAppSelector((store) => store.auth.user);
  const [comment, setComment] = useState<string>('');
  const { bookId } = useParams();

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment.trim()) return;

    const dataComment = {
      text: comment,
      bookId: Number(bookId),
      userId: user.id,
    };

    socket.emit('send_comments', dataComment);

    setComment('');
  };

  return (
    <AddCommentStyled onSubmit={handleAddComment} className={props.className}>
      <textarea
        className="add-comment__textarea"
        value={comment}
        onChange={handleChangeComment}
        placeholder="Share comment"
      />

      <Button className="add-comment__button">Post a comment</Button>
    </AddCommentStyled>
  );
};

export { AddComment };
