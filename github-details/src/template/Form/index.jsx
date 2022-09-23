import React from 'react';
import { FaPlus } from 'react-icons/fa';
import api from '../../services/api';

import { Container, SubmitBtn } from './styles';

export default function Form() {
  const [newRepo, setNewRepo] = React.useState('');
  const [listRepositories, setListRepositories] = React.useState([]);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      async function getData() {
        const response = await api.get(`repos/${newRepo}`);
        const data = {
          name: response.data.full_name,
        };
        setListRepositories([...listRepositories, data]);
        setNewRepo('');
        console.log(listRepositories);
      }
      getData();
    },
    [listRepositories, newRepo],
  );

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username/repositório"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
      />
      <SubmitBtn>
        <FaPlus color="#fff" size={14} />
      </SubmitBtn>
    </Container>
  );
}
