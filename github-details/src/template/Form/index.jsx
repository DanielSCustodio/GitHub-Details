import React from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Container, SubmitBtn } from './styles';

export default function Form() {
  const [newRepo, setNewRepo] = React.useState('');
  const [listRepositories, setListRepositories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      async function getData() {
        setLoading(true);
        try {
          const response = await api.get(`repos/${newRepo}`);
          const data = {
            name: response.data.full_name,
          };
          setListRepositories([...listRepositories, data]);
          setNewRepo('');
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
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

      <SubmitBtn loading={loading ? 1 : 0}>
        {loading ? (
          <FaSpinner color="#fff" size={14} />
        ) : (
          <FaPlus color="#fff" size={14} />
        )}
      </SubmitBtn>
    </Container>
  );
}
