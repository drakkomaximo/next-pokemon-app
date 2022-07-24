import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui"

interface LayoutProps {
    children: JSX.Element,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin


export const Layout: FC<LayoutProps> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Andrés Villanueva Tabares" />
                <meta name="description" content="Information about Pokemon XXXXX" />
                <meta name="keywords" content="XXXX, poñemon, pokedex" />
                <meta property="og:title" content={ `Information about ${ title }` } />
                <meta property="og:description" content={`This is a page about ${ title }`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
