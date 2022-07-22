import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon, Sprites } from '../../interfaces';

interface Props {
  pokemon: Pokemon;
}

const renderSprites = [
  {
    id: 0,
    spriteName: 'front_default'
  },
  {
    id: 1,
    spriteName: 'back_default'
  },
  {
    id: 2,
    spriteName: 'front_shiny'
  },
  {
    id: 3,
    spriteName: 'back_shiny'
  },
]

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const filterObject = (objectData: Sprites, entry: string): string => {
    const createArray = Object.entries(objectData)
    const filterarray = createArray.filter(data => data[0] === entry)
    return filterarray[0][1]
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px ' }} gap={2}>
        <Grid xs={12} sm={4} >
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'https://i.etsystatic.com/14825908/r/il/850fbd/1818252638/il_570xN.1818252638_e8ii.jpg'}
                alt={pokemon.name || 'no pokemon'}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>

              <Button color='gradient' ghost>
                Guardar en favoritos
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex'>
                {
                  renderSprites.map(({ id, spriteName }) => (
                    <Image
                      key={id}
                      src={filterObject(pokemon.sprites, spriteName)}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                    />
                  ))
                }
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage