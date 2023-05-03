export const superheroes: Superhero[] = [];

export interface Superhero {
  id: number;
  name: string;
  alias: string;
  powers: string[];
  weaknesses: string[];
}
