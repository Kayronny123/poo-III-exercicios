import { superheroes, Superhero } from '../database/db';
import knex from 'knex';
import knexfile from '../database/knex.config';

const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];

export const connection = knex(config);


export class SuperheroModel {
  create(name: string, alias: string, powers: string[], weaknesses: string[]): Superhero {
    const id = superheroes.length + 1;
    const superhero = { id, name, alias, powers, weaknesses };
    superheroes.push(superhero);
    return superhero;
  }

  getAll(): Superhero[] {
    return superheroes;
  }

  getById(id: number): Superhero | undefined {
    return superheroes.find((superhero) => superhero.id === id);
  }

  update(id: number, name: string, alias: string, powers: string[], weaknesses: string[]): Superhero | undefined {
    const superhero = superheroes.find((superhero) => superhero.id === id);
    if (superhero) {
      superhero.name = name;
      superhero.alias = alias;
      superhero.powers = powers;
      superhero.weaknesses = weaknesses;
    }
    return superhero;
  }

  delete(id: number): boolean {
    const index = superheroes.findIndex((superhero) => superhero.id === id);
    if (index !== -1) {
      superheroes.splice(index, 1);
      return true;
    }
    return false;
  }
}
