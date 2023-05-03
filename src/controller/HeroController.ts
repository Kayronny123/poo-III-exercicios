import { Request, Response } from 'express';
import { SuperheroService } from '../services/superheroService';

const superheroService = new SuperheroService();

export const createSuperhero = (req: Request, res: Response) => {
  const { name, alias, powers, weaknesses } = req.body;

  const superhero = superheroService.createSuperhero(name, alias, powers, weaknesses);

  res.status(201).json(superhero);
};

export const getAllSuperheroes = (req: Request, res: Response) => {
  const superheroes = superheroService.getAllSuperheroes();

  res.json(superheroes);
};

export const getSuperheroById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const superhero = superheroService.getSuperheroById(id);

  if (!superhero) {
    res.status(404).json({ message: `Superhero with ID ${id} not found` });
  } else {
    res.json(superhero);
  }
};

export const updateSuperhero = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, alias, powers, weaknesses } = req.body;

  const updatedSuperhero = superheroService.updateSuperhero(id, name, alias, powers, weaknesses);

  if (!updatedSuperhero) {
    res.status(404).json({ message: `Superhero with ID ${id} not found` });
  } else {
    res.json(updatedSuperhero);
  }
};

export const deleteSuperhero = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const deleted = superheroService.deleteSuperhero(id);

  if (!deleted) {
    res.status(404).json({ message: `Superhero with ID ${id} not found` });
  } else {
    res.status(204).send();
  }
};
