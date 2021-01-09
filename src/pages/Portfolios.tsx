import React from "react"
import { H3 } from "GeneralStyles"
import FadePage from "components/fade/FadePage"
import { Col, Row } from "antd"
import PortfolioSelector from "components/portfolios/PortfolioSelector"
import Card from "components/cards/Card"
import styled from "styled-components"
import BigFractionalNumber from "components/numbers/BigFractionalNumber"
import { SmallText } from "GeneralStyles"
import { getCurrency } from "components/numbers/Helper"
import Indicator from "components/numbers/Indicator"
import DividendProfit from "components/cards/DividendProfit"
import { observer } from "mobx-react"
import useStore from "store/useStore"

const Content = styled(Row)`
    margin-top: 30px;
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
            <Content gutter={20}>
                <Col span={5}>
                    <Card title="Суммарная стоимость">
                        <BigFractionalNumber number={4026732} />
                        <SmallText $isGrey={true}>
                            Инвестировано: {getCurrency(3732110)}
                        </SmallText>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card title="Бумажная прибыль">
                        <BigFractionalNumber
                            number={212323}
                            color="dependingOnSign"
                            withSign={true}
                        />
                        <Indicator number={3.4} />
                    </Card>
                </Col>
                <DividendProfit portfolios={portfolios} />
                <Col span={9}>
                    <Card title="Свободных средств"></Card>
                </Col>
            </Content>
        </FadePage>
    )
})

export default Portfolios
