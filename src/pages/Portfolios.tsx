import React from "react"
import { H3 } from "GeneralStyles"
import FadePage from "components/fade/FadePage"
import { Col, Row } from "antd"
import PortfolioSelector from "components/portfolios/PortfolioSelector"
import Card from "components/cards/Card"
import styled from "styled-components"
import DividendProfit from "components/cards/DividendProfit"
import PaperProfitCard from "components/cards/PaperProfitCard"
import CostWithInvestSum from "components/cards/CostWithInvestSum"
import { observer } from "mobx-react"
import useStore from "store/useStore"
import StockTable from "components/tables/StockTable"
import FondTable from "components/tables/FondTable"
import BondTable from "components/tables/BondTable"

const Content = styled(Row)`
    padding-top: 30px;
`

const Portfolios: React.FC = observer(() => {
    const { portfolioStore } = useStore()
    const portfolios = Array.from(portfolioStore.activePortfolioIds)

    return (
        <FadePage>
            <Row>
                <H3>Портфели</H3>
            </Row>
            <PortfolioSelector />
            <Content gutter={[20, 20]}>
                <CostWithInvestSum portfolios={portfolios} />
                <PaperProfitCard portfolios={portfolios} />
                <DividendProfit portfolios={portfolios} />
                <Col span={9}>
                    <Card title="Свободных средств"></Card>
                </Col>
                <StockTable portfolios={portfolios} />
                <FondTable portfolios={portfolios} />
                <BondTable portfolios={portfolios} />
            </Content>
        </FadePage>
    )
})

export default Portfolios
