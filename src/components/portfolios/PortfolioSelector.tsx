import React from "react"
import PortfolioCard from "components/portfolios/PortfolioCard"
import styled from "styled-components"
import { observer } from "mobx-react"
import { Col, Row } from "antd"
import useStore from "store/useStore"
import { usePortfoliosQuery } from "finance-types"
import Loading from "components/loading/Loading"
import { message } from "antd"
import img1 from "./sber.png"
import img2 from "./tin.png"
import { computed } from "mobx"

const SelectorWrapper = styled.div`
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

const PortfolioSelector: React.FC = observer(() => {
    const { data, loading, error } = usePortfoliosQuery()
    const { portfolioStore } = useStore()

    if (loading) return <Loading />
    if (error) message.error(error.message)

    const portfolios =
        data?.portfolios?.map((p) => ({
            id: p?.id || 0,
            name: p?.name || "",
        })) || []

    portfolioStore.updatePortfolios(portfolios)

    const onSelect = (id: number) => {
        portfolioStore.togglePortfolio(id)
    }

    return (
        <SelectorWrapper>
            <Row>
                {portfolioStore.portfolios.map((portfolio, index) => (
                    <Col span={6} key={portfolio.id}>
                        <PortfolioCard
                            active={computed(() =>
                                portfolioStore.isActive(portfolio.id)
                            ).get()}
                            img={index === 0 ? img1 : img2}
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
