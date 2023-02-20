import styled from 'styled-components';

const laptopS = '@media(max-width: 941px)';
const tabletM = '@media(max-width: 685px)';

const UploadAvatarStyled = styled.div`
  position: relative;
  max-width: 305px;
  height: 305px;
  width: 100%;
  background: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.border_radius};

  .default__avatar_icon {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .user__avatar_image {
    border-radius: 16px;
    max-width: 305px;
    width: 100%;
    height: 100%;
    max-height: 305px;
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

  ${laptopS} {
    max-width: 255px;
    height: 255px;

    .user__avatar_image {
      max-width: 255px;
      height: 255px;
    }
  }

  ${tabletM} {
    
  }
`;

export { UploadAvatarStyled };
