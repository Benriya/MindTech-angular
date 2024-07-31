export interface PokemonModel {
  name: string,
  type: string,
  weight: number,
  height: number
  abilities: string[],
  caught?: boolean
}
