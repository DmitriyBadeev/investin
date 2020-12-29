import styled from "styled-components";
import {Typography} from 'antd'

const { Text } = Typography

type SmallTextProps = {
    isPrimaryColor?: boolean
}

export const SmallText = styled(Text)<SmallTextProps>`
    font-size: 12px;
    color: ${props => props.isPrimaryColor ? props.theme.primary : props.theme.grey2};
`

export const H3 = styled.h3`
    font-size: 25px;
    font-weight: 600;
    color: ${props => props.theme.black};
    font-family: 'Open Sans', sans-serif;
`