import {GenericAPIModel} from "./genericAPIModel";


// any[] indicates the types with are not used, and would have added unnecessary extra time just searching them out
export interface PokemonModel {
  name: string,
  abilities: {ability: GenericAPIModel, is_hidden: boolean, slot: number}[],
  cries: any[],
  forms: any[],
  game_indices: any[],
  held_items: any[],
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  moves: any[],
  order: number,
  past_abilities: any[],
  past_types: any[],
  species: any,
  sprites: any,
  stats: any[],
  types: {slot: number, type: GenericAPIModel}[],
  weight: number,
  height: number
  caught?: boolean
}
