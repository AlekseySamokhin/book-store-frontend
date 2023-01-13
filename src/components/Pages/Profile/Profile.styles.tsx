import styled from 'styled-components';

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
  margin-bottom: 50px;

  .profile__avatar {
    position: relative;
    width: 305px;
    height: 305px;
    background: #f0f4ef;
    border-radius: 16px;
    margin-right: 128px;

    .default__avatar_icon {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    .default__avatar__upload {
      width: 48px;
      height: 48px;
      background-color: #344966;
      border-radius: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 15px;
      bottom: 15px;
      cursor: pointer;
    }
  }

  .profile__info {
    max-width: 522px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .profile__form {
    max-width: 522px;
    width: 100%;

    .profile__text {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 30px;

      h3 {
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
      }

      p {
        text-decoration: underline;
        color: #8d9f4f;
        font-size: 14px;
        cursor: pointer;
      }
    }

    .profile__input:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .profile__form:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export { ProfileStyled };
