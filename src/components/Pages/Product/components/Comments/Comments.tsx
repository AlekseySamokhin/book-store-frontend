import { Comment } from './Comment';

import { CommentsStyled } from './Comments.styled';

const Comments: React.FC = (): JSX.Element => {
  return (
    <CommentsStyled>
      <h3 className="comments__title">Comments</h3>
      <Comment className="comment__item" />
      <Comment className="comment__item" />
      <Comment className="comment__item" />
    </CommentsStyled>
  );
};

export { Comments };
