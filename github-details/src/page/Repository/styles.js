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
  flex-wrap: wrap;

  @media (max-width: 500px) {
    max-width: 90vw;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem 1rem;
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
  padding: 1rem 0 0 1rem;
  color: #58a6ff;
  width: auto;
  margin-right: 90%;
`;

export const IssuesList = styled.ul`
  max-width: 50vw;
  margin: 0 auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    background-color: #161b22;
    border-radius: 6px;
    border: 1px solid #30363d;
    padding: 1rem;

    & + li {
      margin-top: 1rem;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 1rem;
    }

    div {
      flex: 1;

      strong {
        font-size: 14px;

        a {
          color: #58a6ff;
        }

        div {
          margin: 1rem 0;
          display: flex;
          flex-wrap: wrap;

          span {
            background: #238636;
            font-size: 12px;
            font-weight: 100;
            padding: 1px 10px;
            border-radius: 15px;
            color: #c9d1d9;
            margin: 0.2rem;
          }
        }
      }
    }
  }
`;
