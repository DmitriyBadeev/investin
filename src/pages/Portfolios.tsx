import React from "react"
import { H3 } from "GeneralStyles"
import FadePage from "components/fade/FadePage"
import { Row } from "antd"
import PortfolioSelector from "components/portfolios/PortfolioSelector"

const Portfolios: React.FC = () => {
    return (
        <FadePage>
            <Row>
                <H3>Портфели</H3>
            </Row>
            <PortfolioSelector />
        </FadePage>
    )
}

export default Portfolios
