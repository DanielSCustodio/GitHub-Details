import styled, { keyframes, css } from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;

  input {
    flex: 1;
    padding: 5px 12px;
    background-color: #0d1117;
    border: 1px solid ${(props) => (props.error ? '#da3633' : '#30363d')};
    border-radius: 6px;
    color: #c9d1d9;
  }

  span {
    width: 100%;
    margin-top: 1rem;
    color: #da3633;
  }
`;

const animation = keyframes`

from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}

`;

export const SubmitBtn = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #238636;
  padding: 5px 1.5rem;
  border: 0;
  border-radius: 6px;
  margin-left: 5px;
  transition: 0.8s;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    background-color: #2ea043;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animation} 2s linear infinite;
      }
    `}
`;
