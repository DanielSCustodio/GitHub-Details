import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Container = styled.section`
  background-color: #161b22;
  max-width: 50vw;
  border-radius: 6px;
  border: 1px solid #30363d;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 50px;
    border-radius: 50%;
  }

  h1 {
    font-size: 21px;
    margin: 1rem 0;
    color: #c9d1d9;
  }

  p {
    text-align: center;
  }
`;

export const Back = styled(Link)`
  padding: 1rem;
  color: #58a6ff;
`;
