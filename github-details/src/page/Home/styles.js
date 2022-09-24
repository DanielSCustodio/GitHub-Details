import styled from 'styled-components';

export const Container = styled.main`
  max-width: 50vw;
  border-radius: 6px;
  border: 1px solid #30363d;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: 500px) {
    max-width: 90vw;
  }

  h1 {
    background-color: #161b22;
    width: 100%;
    color: #c9d1d9;
    font-weight: 600;
    padding: 1rem;
    font-size: 14px;
    display: flex;
    justify-content: start;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const List = styled.ul`
  max-width: 50vw;
  margin: 2rem auto;
  list-style: none;

  @media (max-width: 500px) {
    max-width: 90vw;
  }

  li {
    background-color: #161b22;
    border-radius: 6px;
    border: 1px solid #30363d;
    margin: 2rem auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: #c9d1d9;
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  color: #da3633;
  border: 0;
  transition: 0.8s;

  &:hover {
    color: #db0b0b;
  }
`;
