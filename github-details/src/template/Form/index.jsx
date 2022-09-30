import React from 'react';
import ContextGlobal from '../../global/context';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Container, SubmitBtn } from './styles';

export default function Form() {
  const [newRepo, setNewRepo] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [requestError, setRequesError] = React.useState(null);
  const { listRepositories, setListRepositories } =
    React.useContext(ContextGlobal);

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      async function getData() {
        setLoading(true);
        try {
          if (!newRepo) {
            setRequesError('Informe um repositório.');
            return;
          }
          const { data } = await api.get(`repos/${newRepo}`);

          const hasRepo = listRepositories.find(
            (repo) => repo.name === data.full_name,
          );

          if (hasRepo) {
            setRequesError(`O repositório ${newRepo} já está listado.`);
            return;
          }
          const datas = {
            name: data.full_name,
            avatar: data.owner.avatar_url,
          };
          setListRepositories([datas, ...listRepositories]);
          setNewRepo('');
          setRequesError('');
        } catch (error) {
          setRequesError(
            `Não existe repositório que corresponda a "${newRepo}".`,
          );
        } finally {
          setLoading(false);
        }
      }
      getData();
    },
    [listRepositories, newRepo, setListRepositories, setRequesError],
  );

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setRequesError(null);
  }

  return (
    <Container onSubmit={handleSubmit} error={requestError}>
      <input
        type="text"
        placeholder="username/repositório"
        value={newRepo}
        onChange={handleInputChange}
      />
      <SubmitBtn loading={loading ? 1 : 0}>
        {loading ? (
          <FaSpinner color="#fff" size={14} />
        ) : (
          <FaPlus color="#fff" size={14} />
        )}
      </SubmitBtn>
      {requestError && <span>{requestError}</span>}
    </Container>
  );
}
