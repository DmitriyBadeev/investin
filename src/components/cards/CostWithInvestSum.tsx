import { Col, message } from "antd"
import BigFractionalNumber from "components/numbers/BigFractionalNumber"
import React, { useEffect } from "react"
import Card from "./Card"
import { useAggregatePortfolioCostWithInvestSumLazyQuery } from "finance-types"
import Loading from "components/loading/Loading"
import { SmallText } from "GeneralStyles"
import { getCurrency } from "components/numbers/Helper"

type propTypes = {
    portfolios: number[]
}

const CostWithInvestSum: React.FC<propTypes> = (props) => {
    const [
        query,
        { data, loading, error },
    ] = useAggregatePortfolioCostWithInvestSumLazyQuery()

    useEffect(() => {
        query({
            variables: {
                portfolioIds: props.portfolios,
            },
        })
    }, [query, props.portfolios])

    if (loading)
        return (
            <Col span={5}>
                <Card title="Суммарная стоимость">
                    <Loading height="60px" />
                </Card>
            </Col>
        )
    if (error) message.error(error.message)

    var isSuccess = data?.aggregatePortfolioCostWithInvestSum?.isSuccess
    var apiMessage = data?.aggregatePortfolioCostWithInvestSum?.message
    const cost = data?.aggregatePortfolioCostWithInvestSum?.result?.cost || 0
    const investSum =
        data?.aggregatePortfolioCostWithInvestSum?.result?.investSum || 0

    if (data?.aggregatePortfolioCostWithInvestSum && !isSuccess) {
        message.error(apiMessage)
    }
    console.log(data?.aggregatePortfolioCostWithInvestSum?.message)

    return (
        <Col span={5}>
            <Card title="Суммарная стоимость">
                <BigFractionalNumber number={cost} />
                <SmallText $isGrey={true}>
                    Инвестировано: {getCurrency(investSum)}
                </SmallText>
            </Card>
        </Col>
    )
}

export default CostWithInvestSum
