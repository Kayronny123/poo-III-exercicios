import express from 'express';
import cors from 'cors';
import { SuperheroService } from './services/superheroService';

const app = express();
const port = 3003;
const superheroService = new SuperheroService();

app.use(express.json());
app.use(cors());

app.get('/superheroes', (req, res) => {
  const superheroes = superheroService.getAllSuperheroes();
  res.json(superheroes);
});

app.get('/superheroes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const superhero = superheroService.getSuperheroById(id);
  if (superhero) {
    res.json(superhero);
  } else {
    res.status(404).send('Superhero not found');
  }
});

app.post('/superheroes', (req, res) => {
  const { name, alias, powers, weaknesses } = req.body;
  const superhero = superheroService.createSuperhero(name, alias, powers, weaknesses);
  res.json(superhero);
});

app.put('/superheroes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, alias, powers, weaknesses } = req.body;
  const updated = superheroService.updateSuperhero(id, name, alias, powers, weaknesses);
  if (updated) {
    res.send('Superhero updated');
  } else {
    res.status(404).send('Superhero not found');
  }
});

app.delete('/superheroes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = superheroService.deleteSuperhero(id);
  if (deleted) {
    res.send('Superhero deleted');
  } else {
    res.status(404).send('Superhero not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
