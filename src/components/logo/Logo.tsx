import React from "react"
import styled from "styled-components"

const LogoWrapper = styled.div`
    font-size: 16px;
    font-weight: 600;
`

const LogoBackground = styled.span`
    display: inline-block;
    padding: 1px 3px;
    margin-left: 2px;
    border-radius: 2px;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
`

const Logo: React.FC = () => {
    return (
        <LogoWrapper>
            Invest<LogoBackground>in</LogoBackground>
        </LogoWrapper>
    )
}

export default Logo
