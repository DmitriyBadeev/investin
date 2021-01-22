import React from "react"
import FadePage from "components/fade/FadePage"
import CurrencyOperationsTable from "components/tables/CurrencyOperationsTable"
import AssetOperationsTable from "components/tables/AssetOperationsTable"
import PaymentsTable from "components/tables/PaymentsTable"
import { Row } from "antd"

const Operations: React.FC = () => {
    return (
        <FadePage>
            <Row gutter={[20, 20]}>
                <CurrencyOperationsTable />
                <AssetOperationsTable />
                <PaymentsTable />
            </Row>
        </FadePage>
    )
}

export default Operations
