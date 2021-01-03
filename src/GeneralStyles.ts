import styled from "styled-components";
import { Typography } from 'antd'

const { Text: AntText } = Typography

type SmallTextProps = {
    $isPrimaryColor?: boolean
}

export const SmallText = styled(AntText)<SmallTextProps>`
    font-size: 12px;
    color: ${props => props.$isPrimaryColor ? props.theme.primary : props.theme.grey2};
`

export const Text = styled(AntText)`
    font-size: 15px;
`

export const H3 = styled.h3`
    font-size: 25px;
    font-weight: 600;
    color: ${props => props.theme.black};
    font-family: 'Open Sans', sans-serif;
`