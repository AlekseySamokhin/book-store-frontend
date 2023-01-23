import { icons } from '../../../../../../assets';
import { CommentStyled } from './Comment.styles';

interface ITypeProps {
  className?: string;
}

const Comment: React.FC<ITypeProps> = (props): JSX.Element => {
  return (
    <CommentStyled className={props.className}>
      <div className="comment__avatar">
        <img
          className="comment__avatar_image"
          src={icons.userProfile}
          alt="Icons user default"
        />
      </div>

      <div className="comment__content">
        <h4 className="comment__content_author">Floyd Miles</h4>
        <h5 className="comment__content_date">Left a comment two days ago</h5>
        <p className="comment__content_text">
          Love this so much! This book opened up a new world for me! I advise
          everyone to get acquainted with the author of this book. He is
          awesome!
        </p>
      </div>
    </CommentStyled>
  );
};

export { Comment };
