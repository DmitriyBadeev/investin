import styled from "styled-components";
import {Typography} from 'antd'

const {Text} = Typography


type SmallTextProps = {
    isPrimaryColor?: boolean
}
export const SmallText = styled(Text)<SmallTextProps>`
    font-size: 12px;
    color: ${props => props.isPrimaryColor ? props.theme.primary : props.theme.grey1}
`