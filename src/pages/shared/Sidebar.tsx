import React from "react"
import styled from "styled-components"
import Logo from "components/logo/Logo"
import NavItem from "components/links/NavItem"
import { AreaChartOutlined, AuditOutlined, BankOutlined } from "@ant-design/icons"

const SidebarWrapper = styled.div`
    width: 90px;
    height: 100%;
    position: fixed;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.white};
`

const LogoWrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemsWrapper = styled.div`
    margin: 80px 8px 0;
`

const Sidebar: React.FC = () => {
    return (
        <SidebarWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <ItemsWrapper>
                <NavItem link="/" icon={<AreaChartOutlined />} active={true}>
                    Портфели
                </NavItem>
                <NavItem link="/" icon={<BankOutlined />} active={false}>
                    Рынок
                </NavItem>
                <NavItem link="/" icon={<AuditOutlined />} active={false}>
                    Операции
                </NavItem>
            </ItemsWrapper>
        </SidebarWrapper>
    )
}

export default Sidebar
