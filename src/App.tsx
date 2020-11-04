import React from "react"
import { ThemeProvider } from "styled-components"
import { ConfigProvider } from "antd"
import ru_RU from "antd/es/locale/ru_RU"
import { BrowserRouter } from "react-router-dom"
import Shared from "pages/shared/Shared"
import Routes from "Routes"

const theme = {
    primary: "#8F61DB",
    green: "#75D728",
    red: "#FF4B4B",
    black: "#333333",
    white: "#FFFFFF",
    grey0: "#FCF9FF",
    grey1: "#555555",
    grey2: "#B4B4B4",
    grey4: "#F4F4F4",
    grey5: "#FAF7FB",

    baseTransition: "0.3s",
    mainBackground: "#faf7ff",
}

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <ConfigProvider locale={ru_RU} csp={{ nonce: "investIn" }}>
                <BrowserRouter>
                    <Shared>
                        <Routes />
                    </Shared>
                </BrowserRouter>
            </ConfigProvider>
        </ThemeProvider>
    )
}

export default App
