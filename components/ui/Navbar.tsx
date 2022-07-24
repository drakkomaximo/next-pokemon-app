import NextLink from 'next/link'
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"


export const Navbar = () => {

    const { theme } = useTheme()


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 30px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src="/imgs/pokedex.png"
                alt="icon app"
                width={30}
                height={30}
                style={{marginRight: '3rem'}}
            />

            <NextLink 
                href="/" 
                passHref
                >
                <Link >
                    <Text color="white" h2 css={{
                        marginLeft: '0.5rem'
                    }}>P</Text>
                    <Text color="white" h3>okedex</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Link >
                    <Text color="white">Favoritos</Text>
                </Link>
            </NextLink>


        </div>
    )
}
