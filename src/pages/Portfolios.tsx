import React from "react"
import { H3 } from "GeneralStyles"
import FadePage from "components/fade/FadePage"
import { Row } from "antd"
import PortfolioSelector from "components/portfolios/PortfolioSelector"
import styled from "styled-components"
import DividendProfitCard from "components/cards/DividendProfitCard"
import BalanceCard from "components/cards/BalanceCard"
import PaperProfitCard from "components/cards/PaperProfitCard"
import CostWithInvestSumCard from "components/cards/CostWithInvestSumCard"
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
            <Content gutter={[20, 20]} hidden={portfolios.length === 0}>
                <CostWithInvestSumCard portfolios={portfolios} />
                <PaperProfitCard portfolios={portfolios} />
                <DividendProfitCard portfolios={portfolios} />
                <BalanceCard portfolios={portfolios} />
                <StockTable portfolios={portfolios} />
                <FondTable portfolios={portfolios} />
                <BondTable portfolios={portfolios} />
            </Content>
        </FadePage>
    )
})

export default Portfolios
