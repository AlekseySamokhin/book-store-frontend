import styled from 'styled-components';

const UploadAvatarStyled = styled.div`
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

  .user__avatar_image {
    position: absolute;
    left: 0;
    right: 0;
    width: 305px;
    height: 305px;
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
`;

export { UploadAvatarStyled };
