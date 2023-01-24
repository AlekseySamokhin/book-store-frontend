import { commentsData } from '../../../../../api/fakeApi/comments';

import { AddComment, CommentItem } from './components';

import { CommentsStyled } from './Comments.styled';
import { CheckAuth } from '../../../../Containers/CheckAuth';

interface ITypesProps {
  className?: string;
}

const Comments: React.FC<ITypesProps> = (props): JSX.Element => {
  return (
    <CommentsStyled className={props.className}>
      <h3 className="comments__title">Comments</h3>

      {commentsData.map((commentItem) => (
        <CommentItem
          className="comments__item"
          key={commentItem.id}
          comment={commentItem}
        />
      ))}

      <CheckAuth needAuth={true}>
        <AddComment className="comments__form" />
      </CheckAuth>
    </CommentsStyled>
  );
};

export { Comments };
