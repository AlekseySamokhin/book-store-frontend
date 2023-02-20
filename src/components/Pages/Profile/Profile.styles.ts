import styled from 'styled-components';

const laptopS = '@media(max-width: 941px)';
const tabletM = '@media(max-width: 685px)';

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 77%;
  gap: 20px;
  padding: 20px 0 110px 0;

  .profile__avatar {
    width: 100%;
  }

  .profile__info {
    max-width: 522px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .profile__form {
    min-width: 378px;
    width: 100%;
  }

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

  .profile__form:not(:last-child) {
    margin-bottom: 40px;
  }

  ${laptopS} {
    width: 100%;

    .profile__text {
      flex-wrap: wrap;

      h3 {
        font-size: 16px;
        line-height: 24px;
      }

      p {
        font-size: 12px;
        line-height: 18px;
      }
    }

    .profile__form {
      min-width: 0;
    }
  }

  ${tabletM} {
    padding-top: 0px;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
`;

export { ProfileStyled };
