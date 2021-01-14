import styled, { ThemedStyledProps } from "styled-components"
import { Typography } from "antd"

const { Text: AntText } = Typography

type TextProps = {
    $color?: "primary" | "grey2" | "black" | "red" | "green"
    $bold?: boolean
}

export const SmallText = styled(AntText)<TextProps>`
    font-size: 12px;
    color: ${chooseColor};
    font-weight: ${(props) => (props.$bold ? 600 : 400)};
`

export const Text = styled(AntText)<TextProps & { $large?: boolean }>`
    font-size: ${(props) => (props.$large ? "18px" : "15px")};
    color: ${chooseColor};
    font-weight: ${(props) => (props.$bold ? 600 : 400)};
`

export const H3 = styled.h3<TextProps>`
    font-size: 25px;
    font-weight: 600;
    color: ${(props) => props.theme.black};
    font-family: "Open Sans", sans-serif;
    color: ${chooseColor};
`

export const H4 = styled.h4<TextProps>`
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.black};
    font-family: "Open Sans", sans-serif;
    color: ${chooseColor};
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

function chooseColor(
    props: ThemedStyledProps<
        TextProps & {
            children?: React.ReactNode
        } & TextProps,
        any
    >
) {
    switch (props.$color) {
        case "primary":
            return props.theme.primary
        case "grey2":
            return props.theme.grey2
        case "black":
            return props.theme.black
        case "red":
            return props.theme.red
        case "green":
            return props.theme.green
        default:
            return props.theme.black
    }
}
