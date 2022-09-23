/* eslint-disable react/prop-types */

import React from 'react';
import ContextGlobal from './context';

const Provider = ({ children }) => {
  const [listRepositories, setListRepositories] = React.useState([]);

  let values = { listRepositories, setListRepositories };

  return (
    <ContextGlobal.Provider value={values}>{children}</ContextGlobal.Provider>
  );
};

export default Provider;
