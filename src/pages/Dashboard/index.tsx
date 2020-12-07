import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

// React.FC = React Function

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/11367212?s=460&u=cd32cf085c826c5bd34071f148cb0170ba2359f0&v=4"
            alt="Paulo Chaves"
          />
          <div>
            <strong>pauloarill/etielengenharia</strong>
            <p>This project was generated with Angular CLI version 9.1.1.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/11367212?s=460&u=cd32cf085c826c5bd34071f148cb0170ba2359f0&v=4"
            alt="Paulo Chaves"
          />
          <div>
            <strong>pauloarill/etielengenharia</strong>
            <p>This project was generated with Angular CLI version 9.1.1.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/11367212?s=460&u=cd32cf085c826c5bd34071f148cb0170ba2359f0&v=4"
            alt="Paulo Chaves"
          />
          <div>
            <strong>pauloarill/etielengenharia</strong>
            <p>This project was generated with Angular CLI version 9.1.1.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
