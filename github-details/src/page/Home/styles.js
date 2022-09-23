import styled from 'styled-components';

export const Container = styled.main`
  max-width: 50vw;
  border-radius: 6px;
  border: 1px solid #30363d;
  margin: 5rem auto;
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
