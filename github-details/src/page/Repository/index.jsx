/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';
import api from '../../services/api';
import {
  Container,
  Owner,
  Loading,
  Back,
  IssuesList,
  PageActions,
  FilterList,
} from './styles';

export default function Repository({ match }) {
  const [reposytory, setRepository] = React.useState({});
  const [issues, setIssues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  // eslint-disable-next-line no-unused-vars
  const filter = [
    { state: 'all', label: 'Todas', active: true },
    { state: 'open', label: 'Abertas', active: true },
    { state: 'closed', label: 'Fechadas', active: true },
  ];
  const [filterIndex, setFilterIndex] = React.useState(0);

  React.useEffect(() => {
    async function getData() {
      const endpoint = decodeURIComponent(match.params.repositorio);

      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${endpoint}`),
        api.get(`/repos/${endpoint}/issues`, {
          params: {
            state: filter.find((f) => f.active === true).state,
            per_page: 5,
          },
        }),
      ]);
      setRepository(repoData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    getData();
  }, [match.params.repositorio]);

  React.useEffect(() => {
    async function getIssues() {
      const endpoint = decodeURIComponent(match.params.repositorio);

      const response = await api.get(`/repos/${endpoint}/issues`, {
        params: {
          state: filter[filterIndex].state,
          page,
          per_page: 5, //paginação
        },
      });
      setIssues(response.data);
    }
    getIssues();
  }, [filterIndex, match.params.repositorio, page]);

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  if (loading) {
    return (
      <Loading>
        <h3>Carregando...</h3>
      </Loading>
    );
  }
  return (
    <>
      <Container>
        <Back to="/">Voltar</Back>
        <Owner>
          <img src={reposytory.owner.avatar_url} alt={reposytory.owner.login} />
          <h1>{reposytory.name.toUpperCase()}</h1>
          <p>{reposytory.description}</p>
        </Owner>
      </Container>
      <FilterList active={filterIndex}>
        {filter.map((item, index) => (
          <button key={item.label} onClick={() => setFilterIndex(index)}>
            {item.label}
          </button>
        ))}
      </FilterList>
      <IssuesList>
        {issues &&
          issues.map((item) => (
            <li key={String(item.id)}>
              <img src={item.user.avatar_url} alt={item.user.login} />
              <div>
                <strong>
                  <a href={item.html_url} target="_blank" rel="noreferrer">
                    {item.title}
                    <div>
                      {item.labels &&
                        item.labels.map((label, id) => (
                          <span key={id}>{label.name}</span>
                        ))}
                    </div>
                  </a>
                </strong>
                <p>{item.user.login}</p>
              </div>
            </li>
          ))}
      </IssuesList>
      {issues.length > 1 && (
        <PageActions>
          <button
            className="btn btn-first"
            type="button"
            onClick={() => handlePage('back')}
            disabled={page < 2}
          >
            Voltar
          </button>
          <button
            className="btn btn-second"
            type="button"
            onClick={() => handlePage('next')}
          >
            Próxima
          </button>
        </PageActions>
      )}
    </>
  );
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repositorio: PropTypes.string,
    }),
  }),
};
