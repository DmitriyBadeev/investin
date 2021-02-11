import React from "react"
import { H3 } from "GeneralStyles"
import FadePage from "components/fade/FadePage"
import MarketTable from "components/tables/MarketTable"
import { Row } from "antd"

const Market: React.FC = () => {
    return (
        <FadePage>
            <Row>
                <H3>Рынок</H3>
            </Row>

            <MarketTable />
        </FadePage>
    )
}

export default Market
