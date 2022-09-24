import PropTypes from 'prop-types';
import React from 'react';
import api from '../../services/api';
import { Container } from './styles';

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
            per_page: 5,
          },
        }),
      ]);
      setRepository(repoData);
      setIssues(issuesData);
      setLoading(false);
    }
    getData();
  }, [match.params.repositorio]);

  return <Container></Container>;
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repositorio: PropTypes.string,
    }),
  }),
};
