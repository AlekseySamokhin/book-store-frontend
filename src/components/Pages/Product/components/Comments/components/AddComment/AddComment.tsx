/* eslint-disable no-console */
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { commentService } from '@/api/services';

import { Button } from '@/components/ui';

import { AddCommentStyled } from './AddComment.styles';

import type { ITypeComment } from '@/interfaces/commentInterfaces';

interface ITypesProps {
  addComment: (comment: ITypeComment[]) => void;
  className?: string;
}

const AddComment: React.FC<ITypesProps> = (props): JSX.Element => {
  const [text, setText] = useState<string>('');
  const { bookId } = useParams();

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAddComment = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const options = {
      text: text.trim(),
      bookId: Number(bookId),
    };

    setText('');

    const comments = await commentService.addComment(options);

    props.addComment(comments);
  };

  return (
    <AddCommentStyled onSubmit={handleAddComment} className={props.className}>
      <textarea
        className="add-comment__textarea"
        value={text}
        onChange={handleChangeComment}
        placeholder="Share comment"
      />

      <Button className="add-comment__button">Post a comment</Button>
    </AddCommentStyled>
  );
};

export { AddComment };
