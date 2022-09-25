import PropTypes from 'prop-types';
import React from 'react';
import api from '../../services/api';
import { Container, Owner, Loading, Back, IssuesList } from './styles';

export default function Repository({ match }) {
  const [reposytory, setRepository] = React.useState({});
  const [issues, setIssues] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      const endpoint = decodeURIComponent(match.params.repositorio);

      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${endpoint}`),
        api.get(`/repos/${endpoint}/issues`, {
          params: {
            state: 'open',
            per_page: 15,
          },
        }),
      ]);
      setRepository(repoData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    getData();
  }, [match.params.repositorio]);

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
