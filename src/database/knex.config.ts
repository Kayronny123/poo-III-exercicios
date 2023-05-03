import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'senha',
    database: 'meu_banco_de_dados',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/migrations`,
  },
  seeds: {
    directory: `${__dirname}/seeds`,
  },
};

export default config;
