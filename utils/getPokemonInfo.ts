import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async (nameOrId: string) => {

  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    return {
      name: data.name,
      id: data.id,
      sprites: data.sprites,
    }
  } catch (error) {
    return null
  }
}