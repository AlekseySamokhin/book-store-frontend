import { useState } from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { icons } from '../../../../../assets';
import { useAppDispatch, useAppSelector } from '../../../../../redux/store';
import { userThunks } from '../../../../../redux/users/thunks';
import { updateInfoUserSchema } from '../../../../../schemas/user';

import { Input, Button } from '../../../../UI';

import { UpdateInfoStyled } from './UpdateInfo.styles';

interface ITypesProps {
  className?: string;
}

interface ITypesValuesForm {
  fullName: string;
  email: string;
}

const UpdateInfo: React.FC<ITypesProps> = (props): JSX.Element => {
  const [hideInfo, setHideInfo] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const infoUser = useAppSelector((state) => state.users.user);

  const handleChangeInfo = () => {
    setHideInfo(!hideInfo);
  };

  const handleSubmitInfo = async (values: ITypesValuesForm) => {
    try {
      await dispatch(
        userThunks.updateInfo({
          fullName: values.fullName,
          email: values.email,
        }),
      ).unwrap();

      setHideInfo(false);
    } catch (err) {
      toast.error((err as {message: string}).message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: infoUser.fullName,
      email: infoUser.email,
    },
    validationSchema: updateInfoUserSchema,
    onSubmit: handleSubmitInfo,
  });

  return (
    <UpdateInfoStyled
      className={props.className || ''}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div className="profile__text">
        <h3>Personal information</h3>
        <p onClick={handleChangeInfo}>Change information</p>
      </div>

      <Input
        className="profile__input"
        type="text"
        placeholder="Enter you name"
        text={infoUser.fullName || 'Enter you name'}
        icon={icons.userInput}
        hide={!hideInfo}
        title="Your name"
        value={infoUser.fullName}
        disabled={hideInfo}
        error={formik.errors.fullName || ''}
        touched={formik.touched.fullName}
        fieldInputProps={formik.getFieldProps('fullName')}
      />

      <Input
        className="profile__input"
        type="text"
        placeholder="Enter you mail"
        text={infoUser.email}
        icon={icons.mail}
        hide={!hideInfo}
        title="Your email"
        value={infoUser.email}
        disabled={hideInfo}
        error={formik.errors.email || ''}
        touched={formik.touched.email}
        fieldInputProps={formik.getFieldProps('email')}
      />

      {hideInfo && <Button type="submit">Confirm</Button>}
    </UpdateInfoStyled>
  );
};

export { UpdateInfo };
