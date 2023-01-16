/* eslint-disable no-console */
import { useState } from 'react';
import { useFormik } from 'formik';
import { icons } from '../../../../assets';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { userThunks } from '../../../../redux/users/thunks';
import { UpdateInfoStyled } from './UpdateInfo.styles';

import CustomInput from '../../../CustomInput/CustomInput';
import { Button } from '../../../Button/Button';

import { updateInfoUserSchema } from '../../../../schemas/user';

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
      dispatch(
        userThunks.updateInfo({
          fullName: values.fullName,
          email: values.email,
        }),
      );

      setHideInfo(false);
    } catch (err) {
      console.log(err);
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

      <CustomInput
        className="profile__input"
        type="text"
        value={infoUser.fullName}
        disabled={!hideInfo}
        icon={icons.userInput}
        placeholder={'Your full name'}
        error={formik.errors.fullName}
        touched={formik.touched.fullName}
        fieldInputProps={formik.getFieldProps('fullName')}
      />

      {formik.touched.fullName && formik.errors.fullName && !hideInfo ? (
        <p className="error">{formik.errors.fullName}</p>
      ) : (
        <p>Change full name</p>
      )}

      <CustomInput
        className="profile__input"
        type="email"
        value={infoUser.email}
        disabled={!hideInfo}
        icon={icons.mail}
        placeholder={'Your email'}
        error={formik.errors.email || ''}
        touched={formik.touched.email}
        fieldInputProps={formik.getFieldProps('email')}
      />

      {formik.touched.email && formik.errors.email && !hideInfo ? (
        <p className="error">{formik.errors.email}</p>
      ) : (
        <p>Change email</p>
      )}

      {hideInfo && <Button type="submit">Confirm</Button>}
    </UpdateInfoStyled>
  );
};

export { UpdateInfo };
