import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { icons } from '@/assets';

import type { ITypeComment } from '@/interfaces/commentInterfaces';
import { CommentItemStyled } from './CommentItem.styles';

interface ITypesProps {
  className?: string;
  comment: ITypeComment;
}

const CommentItem: React.FC<ITypesProps> = (props): JSX.Element => {
  dayjs.extend(relativeTime);

  const dateOfCreationComment = dayjs(props.comment.dateOfcreation).fromNow();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <CommentItemStyled className={props.className}>
      <div id={`${props.comment.bookId}`} className="comment__avatar">
        <img
          className="comment__avatar_image"
          src={
            props.comment.user.avatar
              ? props.comment.user.avatar
              : icons.userProfile
          }
          alt="Image user avatar"
        />
      </div>

      <div className="comment__content">
        <h4 className="comment__content_author">
          {props.comment.user.fullName
            ? props.comment.user.fullName
            : props.comment.user.email}
        </h4>

        <h5 className="comment__content_date">{dateOfCreationComment}</h5>

        <p className="comment__content_text">{props.comment.text}</p>
      </div>
    </CommentItemStyled>
  );
};

export { CommentItem };
