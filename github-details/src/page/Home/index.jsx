import React from 'react';
import ContextGlobal from '../../global/context';
import { FaGithub, FaBars, FaTrash } from 'react-icons/fa';
import Form from '../../template/Form';
import { Container, List, DeleteButton } from './styles';

export default function Home() {
  const { listRepositories, setListRepositories } =
    React.useContext(ContextGlobal);

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
              <DeleteButton onClick={() => handleDelete(item.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              <span>{item.name}</span>
              <a href="">
                <FaBars size={14} />
              </a>
            </li>
          ))}
      </List>
    </>
  );
}
