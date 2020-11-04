import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { SmallText } from "GeneralStyles"

type mainProps = {
    icon: any
    link: string
}

type activeProp = {
    active?: boolean
}

const ItemWrapper = styled.div<activeProp>`
    background: ${(props) => (props.active ? props.theme.grey5 : props.theme.grey0)};
    text-align: center;
    margin: 10px 0;
    transition: all ${(props) => props.theme.baseTransition};
    &:hover {
        background: ${(props) => props.theme.grey4};
    }
`

const IconWrapper = styled.div<activeProp>`
    font-size: 25px;
    line-height: 30px;
    padding-top: 5px;
    color: ${(props) => (props.active ? props.theme.primary : props.theme.grey1)};
`

type propTypes = mainProps & activeProp

const NavItem: React.FC<propTypes> = (props) => {
    return (
        <Link to={props.link}>
            <ItemWrapper active={props.active}>
                <IconWrapper active={props.active}>{props.icon}</IconWrapper>
                <SmallText isPrimaryColor={props.active}>{props.children}</SmallText>
            </ItemWrapper>
        </Link>
    )
}

export default NavItem
