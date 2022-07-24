import { Container, Image, Text } from '@nextui-org/react'

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>
        <Text h1> There are no favorites </Text>
        <Image 
          src={`/imgs/pikachu-criing.png`}
          alt='there are no favorites'
          width={250}
          height={250}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
  )
}