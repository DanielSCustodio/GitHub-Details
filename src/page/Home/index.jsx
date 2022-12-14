import React from 'react';
import ContextGlobal from '../../global/context';
import { FaGithub, FaBars, FaTrash } from 'react-icons/fa';
import Form from '../../template/Form';
import { Link } from 'react-router-dom';
import { Container, List, DeleteButton } from './styles';

export default function Home() {
  const { listRepositories, setListRepositories } =
    React.useContext(ContextGlobal);

  React.useEffect(() => {
    const repoStorage = localStorage.getItem('repos');
    if (repoStorage) {
      setListRepositories(JSON.parse(repoStorage));
    }
  }, [setListRepositories]);

  React.useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(listRepositories));
  }, [listRepositories]);

  const handleDelete = React.useCallback(
    (repo) => {
      const repoDelete = listRepositories.filter((item) => item.name !== repo);
      setListRepositories(repoDelete);
    },
    [listRepositories, setListRepositories],
  );

  return (
    <>
      <Container>
        <h1>
          <FaGithub size={25} />
          Repositórios
        </h1>
        <Form />
      </Container>
      <List>
        {listRepositories &&
          listRepositories.map((item) => (
            <li key={item.name}>
              <div>
                <DeleteButton onClick={() => handleDelete(item.name)}>
                  <FaTrash size={14} />
                </DeleteButton>
                <img src={item.avatar} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <Link to={`/repositorio/${encodeURIComponent(item.name)}`}>
                <FaBars size={14} />
              </Link>
            </li>
          ))}
      </List>
    </>
  );
}
