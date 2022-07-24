import { Card, Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoritesCardPokemons } from './FavoriteCardPokemons'

interface Props {
    pokemons: number[]
}

export const FavoritesPokemons: FC<Props> = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (
                    <FavoritesCardPokemons key={id} pokemonId={id} />
                ))
            }
        </Grid.Container>
    )
}