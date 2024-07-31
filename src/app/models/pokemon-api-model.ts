import { GenericAPIModel } from './genericAPIModel';

export interface PokemonApiModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: GenericAPIModel[];
}
