import styled from 'styled-components';

export const Nav = styled.header`
  background-color: #161b22;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0.3rem 1.9rem;
  margin-bottom: 5rem;

  @media (max-width: 720px) {
    padding: 0 1rem;
    font-size: 12px;
    width: 100%;
    overflow-x: hidden;
    margin-bottom: 1rem;
  }

  span {
    color: #c9d1d9;
  }

  img {
    width: 180px;
    height: 50px;

    @media (max-width: 720px) {
      width: 120px;
      height: 50px;
    }
  }
`;
