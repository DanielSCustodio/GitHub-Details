import PropTypes from 'prop-types';
import React from 'react';
import ContextGlobal from './context';

const Provider = ({ children }) => {
  const [listRepositories, setListRepositories] = React.useState([]);

  let values = { listRepositories, setListRepositories };

  return (
    <ContextGlobal.Provider value={values}>{children}</ContextGlobal.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
