import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('customers', [
      {
        name: 'John Doe',
        email: 'johnDoe@gmail.com',
        cpf: '000.000.000-00',
        phone: '000000000',
        status: 'ativo',
      },
      {
        name: 'Jane Doe',
        email: 'janeDoe@gmail.com',
        cpf: '111.111.111-11',
        phone: '111111111',
        status: 'inativo',
      },
      {
        name: 'John Smith',
        email: 'smithDoe@gmail.com',
        cpf: '222.222.222-22',
        phone: '222222222',
        status: 'aguardando ativação',
      },
      {
        name: 'Jane Smith',
        email: 'janeSmith@gmail.com',
        cpf: '333.333.333-33',
        phone: '333333333',
        status: 'desativado',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('customers', {});
  }
};