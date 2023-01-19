import styled from 'styled-components';

interface ITypesProps {
  error?: string;
  touched?: boolean;
}

const InputStyled = styled.div<ITypesProps>`
.custom__input {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 630px;
  cursor: pointer;
  margin-bottom: 10px;

  font-weight: 400;
  border-radius: 16px;

  border: ${(props) => (props.error && props.touched ? '2px solid #ED2E7E' : '')};
  background-color: ${(props) => (props.error && props.touched ? props.theme.colors.error : props.theme.colors.light)};
}

input {
  width: 100%;
  padding: 20px 14px 20px 0;
  background-color: ${(props) => (props.error && props.touched ? props.theme.colors.error : props.theme.colors.light)};
  font-size: 16px;
  letter-spacing: 1.5px;
  line-height: 24px;
  border-radius: 16px;
  line-height:normal;
  cursor: pointer;
}

img {
  padding: 20px 0px 20px 26px;
}

.input__text {
  width: 100%;
  letter-spacing: 0.75px;
  color: #344966;
    
  &_title {
    font-weight: 500;
    font-size: 14px;
  }

  &_text {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
}

.input__icons {
  margin-right: 20px;
}

.error-message {
  color: #a02659;
}

.primary-mesasge {
  color: #344966; 
}
`;

export { InputStyled };
