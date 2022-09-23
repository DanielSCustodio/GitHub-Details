import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;

  input {
    flex: 1;
    padding: 5px 12px;
    background-color: #0d1117;
    border: 1px solid #30363d;
    border-radius: 6px;
    color: #c9d1d9;
  }
`;

export const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  background-color: #238636;
  padding: 5px 1.5rem;
  border: 0;
  border-radius: 6px;
  margin-left: 5px;
  transition: 0.8s;

  &:hover {
    background-color: #2ea043;
  }
`;
