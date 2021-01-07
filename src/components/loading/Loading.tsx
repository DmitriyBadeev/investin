import React from "react"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { FlexCenter } from "GeneralStyles"
import styled from "styled-components"

type propTypes = {
    size?: number
    height?: string
}

type styleProps = {
    $height: string
}

const Wrapper = styled(FlexCenter)<styleProps>`
    height: ${(props) => props.$height};
    align-items: center;
`

const Loading: React.FC<propTypes> = ({ size = 32, height = "auto" }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />

    return (
        <Wrapper $height={height}>
            <Spin indicator={antIcon} />
        </Wrapper>
    )
}

export default Loading
