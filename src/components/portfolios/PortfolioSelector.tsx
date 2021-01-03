import React from "react"
import PortfolioCard from "components/portfolios/PortfolioCard"
import styled from "styled-components"
import { observer } from "mobx-react"
import { Col, Row } from "antd"
import useStore from "store/useStore"

const SelectorWrapper = styled.div`
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

const PortfolioSelector: React.FC = observer(() => {
    const { portfolioStore } = useStore()

    const onSelect = (id: number) => {
        portfolioStore.togglePortfolio(id)
    }

    return (
        <SelectorWrapper>
            <Row>
                {portfolioStore.portfolios.map((portfolio) => (
                    <Col span={6} key={portfolio.id}>
                        <PortfolioCard
                            active={
                                portfolioStore.isActive(portfolio.id) || false
                            }
                            img={portfolio.img}
                            id={portfolio.id}
                            onSelect={onSelect}
                        >
                            {portfolio.name}
                        </PortfolioCard>
                    </Col>
                ))}
            </Row>
        </SelectorWrapper>
    )
})

export default PortfolioSelector
