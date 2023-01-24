import { icons } from '../../../../../../../assets';
import { CommentItemStyled } from './CommentItem.styles';

interface ITypesComment {
  id: number;
  avatar?: string;
  author: string;
  date: string;
  text: string;
}

interface ITypesProps {
  className?: string;
  comment: ITypesComment;
}

const CommentItem: React.FC<ITypesProps> = (props): JSX.Element => {
  const { comment } = props;

  return (
    <CommentItemStyled className={props.className}>
      <div className="comment__avatar">
        <img
          className="comment__avatar_image"
          src={comment.avatar ? comment.avatar : icons.userProfile}
          alt="Image user avatar"
        />
      </div>

      <div className="comment__content">
        <h4 className="comment__content_author">{comment.author}</h4>
        <h5 className="comment__content_date">{comment.date}</h5>
        <p className="comment__content_text">{comment.text}</p>
      </div>
    </CommentItemStyled>
  );
};

export { CommentItem };
