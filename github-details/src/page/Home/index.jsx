import React from 'react';
import ContextGlobal from '../../global/context';
import { FaGithub } from 'react-icons/fa';
import Form from '../../template/Form';
import { Container } from './styles';

export default function Home() {
  const { listRepositories } = React.useContext(ContextGlobal);
  console.log(listRepositories);
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Repositórios
      </h1>
      <Form />
    </Container>
  );
}
