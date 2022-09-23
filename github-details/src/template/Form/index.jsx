import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, SubmitBtn } from './styles';

export default function Form() {
  return (
    <Container>
      <input type="text" placeholder="username/repositório" />
      <SubmitBtn>
        <FaPlus color="#fff" size={14} />
      </SubmitBtn>
    </Container>
  );
}
