import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { ConfigProvider } from "antd"
import ru_RU from "antd/es/locale/ru_RU"
import { BrowserRouter } from "react-router-dom"
import Shared from "pages/shared/Shared"
import Routes from "Routes"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { observer } from "mobx-react"
import useStore from "store/useStore"

import "./index.css"

const client = new ApolloClient({
    uri: "https://finance.badeev.info/graphql?",
    request: (operation) => {
        const token = window.localStorage.getItem("token")
        operation.setContext({
            headers: {
                Authorization: token ? token : "",
            },
        })
    },
})

const theme = {
    primary: "#8F61DB",
    green: "#75D728",
    red: "#FF4B4B",
    black: "#333333",
    white: "#FFFFFF",
    grey0: "#FCF9FF",
    grey1: "#555555",
    grey2: "#B4B4B4",
    grey3: "#E0E0E0",
    grey4: "#F4F4F4",
    grey5: "#FAF7FB",

    baseTransition: "0.3s",
    mainBackground: "#FAF7FF",
    cardBackground: "#FFFFFF",
}

const App: React.FC = observer(() => {
    const { authService } = useStore()

    useEffect(() => {
        authService.loadUser()
    }, [authService])

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <ConfigProvider locale={ru_RU} csp={{ nonce: "investIn" }}>
                    <BrowserRouter>
                        <Shared>
                            <Routes />
                        </Shared>
                    </BrowserRouter>
                </ConfigProvider>
            </ThemeProvider>
        </ApolloProvider>
    )
})

export default App
