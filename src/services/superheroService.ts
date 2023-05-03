import { SuperheroModel } from '../models/Heroes';

const superheroModel = new SuperheroModel();

export class SuperheroService {
  createSuperhero(name: string, alias: string, powers: string[], weaknesses: string[]) {
    return superheroModel.create(name, alias, powers, weaknesses);
  }

  getAllSuperheroes() {
    return superheroModel.getAll();
  }

  getSuperheroById(id: number) {
    return superheroModel.getById(id);
  }

  updateSuperhero(id: number, name: string, alias: string, powers: string[], weaknesses: string[]) {
    return superheroModel.update(id, name, alias, powers, weaknesses);
  }

  deleteSuperhero(id: number) {
    return superheroModel.delete(id);
  }
}
