import React from "react"
import styled from "styled-components"
import Logo from "components/logo/Logo"
import NavItem from "components/links/NavItem"
import { AreaChartOutlined, AuditOutlined, BankOutlined, PoweroffOutlined, UserOutlined } from "@ant-design/icons"
import { useLocation } from "react-router-dom"

const SidebarWrapper = styled.div`
    width: 90px;
    height: 100%;
    position: fixed;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.white};
`

const LogoWrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemsWrapper = styled.div`
    margin: 0 8px;
`

const SpaceBetween = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
    height: calc(100% - 130px);
`

const Sidebar: React.FC = () => {
    const location = useLocation()

    return (
        <SidebarWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <SpaceBetween>
                <ItemsWrapper>
                    <NavItem link="/" icon={<AreaChartOutlined />} active={location.pathname === "/"}>
                        Портфели
                    </NavItem>
                    <NavItem link="/market" icon={<BankOutlined />} active={location.pathname === "/market"}>
                        Рынок
                    </NavItem>
                    <NavItem link="/operations" icon={<AuditOutlined />} active={location.pathname === "/operations"}>
                        Операции
                    </NavItem>
                </ItemsWrapper>
                <ItemsWrapper>
                    <NavItem link="/profile" icon={<UserOutlined />} active={location.pathname === "/profile"}>
                        Профиль
                    </NavItem>
                    <NavItem link="/" icon={<PoweroffOutlined />} active={false}>
                        Выйти
                    </NavItem>
                </ItemsWrapper>
            </SpaceBetween>
        </SidebarWrapper>
    )
}

export default Sidebar
