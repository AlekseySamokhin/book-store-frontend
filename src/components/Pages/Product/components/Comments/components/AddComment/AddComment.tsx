import { Button } from '../../../../../../ui';

import { AddCommentStyled } from './AddComment.styles';

interface ITypesProps {
  className?: string;
}

const AddComment: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <AddCommentStyled className={props.className}>
      <textarea className='add-comment__textarea' name="" placeholder="Share comment" />

      <Button className='add-comment__button'>Post a comment</Button>
    </AddCommentStyled>
  );
};

export { AddComment };
