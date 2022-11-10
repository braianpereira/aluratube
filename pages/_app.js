import React from "react";
import {CSSReset} from "../src/components/CSSReset";
import {ThemeProvider} from "styled-components";
import ColorModeProvider, {ColorModeContext} from "../src/components/Menu/components/ColorMode";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode = "dark">
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext)
    const [valorDoFiltro, setValorDoFiltro] = React.useState('')

    const theme = {
        light: {
            backgroundBase: "#f9f9f9",
            backgroundLevel1: "#ffffff",
            backgroundLevel2: "#f0f0f0",
            borderBase: "#e5e5e5",
            textColorBase: "#222222",
        },
        dark: {
            backgroundBase: "#181818",
            backgroundLevel1: "#202020",
            backgroundLevel2: "#313131",
            borderBase: "#383838",
            textColorBase: "#FFFFFF",
        }
    }

    return (
        <ThemeProvider theme={theme[contexto.mode]}>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Component {...pageProps} />
            </div>

        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp { ...props }/>
        </ProviderWrapper>
    )
}