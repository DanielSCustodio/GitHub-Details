import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Form from '../../template/Form';
import { Container } from './styles';

export default function Home() {
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
