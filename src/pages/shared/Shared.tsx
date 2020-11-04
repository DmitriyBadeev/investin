import React from "react"
import styled from "styled-components"
import Sidebar from "./Sidebar"

const MainLayout = styled.div`
    background: #faf7ff;
    min-height: 100vh;
`

const Shared: React.FC = (props) => {
    return (
        <MainLayout>
            <Sidebar /> <div>{props.children}</div>
        </MainLayout>
    )
}

export default Shared
