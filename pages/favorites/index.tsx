import { useState, useEffect } from 'react';

import { NextPage } from 'next';

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritesPokemons } from '../../components/pokemon';

const FavoritePage: NextPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons() )
  }, [])
  

  return (
    <Layout title='Favorites - Pokemons'>
      {
        favoritesPokemons.length === 0 ? (
          <NoFavorites/>
        ) : (
          <FavoritesPokemons pokemons={favoritesPokemons}  />
        )
      }
    </Layout>
  )
}

export default FavoritePage