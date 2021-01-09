import styled from "styled-components"
import { Typography } from "antd"

const { Text: AntText } = Typography

type TextProps = {
    $isPrimaryColor?: boolean
    $isGrey?: boolean
}

export const SmallText = styled(AntText)<TextProps>`
    font-size: 12px;
    color: ${(props) => {
        if (props.$isPrimaryColor) {
            return props.theme.primary
        }

        if (props.$isGrey) {
            return props.theme.grey2
        }

        return props.theme.black
    }};
`

export const Text = styled(AntText)<TextProps>`
    font-size: 15px;
    color: ${(props) => {
        if (props.$isPrimaryColor) {
            return props.theme.primary
        }

        if (props.$isGrey) {
            return props.theme.grey2
        }

        return props.theme.black
    }};
`

export const H3 = styled.h3`
    font-size: 25px;
    font-weight: 600;
    color: ${(props) => props.theme.black};
    font-family: "Open Sans", sans-serif;
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`
