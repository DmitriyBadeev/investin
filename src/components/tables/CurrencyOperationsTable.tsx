import React from "react"
import { Col, message, Row, Table } from "antd"
import Card from "components/cards/Card"
import { H4, Text } from "GeneralStyles"
import { getNumericStringDate } from "helpers/dateHelpers"
import {
    CurrencyOperationsQuery,
    useCurrencyOperationsQuery,
} from "finance-types"
import { getCurrency, getSymbol } from "helpers/financeHelpers"
import { getAllValues } from "helpers/arrayHelpers"
import CreateCurrencyOperationDrawer from "components/drawers/CreateCurrencyOperationDrawer"

const CurrencyOperationsTable: React.FC = () => {
    const { data, loading, error, refetch } = useCurrencyOperationsQuery()

    if (error) message.error(error.message)

    const preparedData = data?.allCurrencyOperations?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    return (
        <Col span={24}>
            <Card
                title={
                    <Row justify="space-between">
                        <H4>Валютные операции</H4>
                        <CreateCurrencyOperationDrawer
                            update={() => refetch()}
                        />
                    </Row>
                }
            >
                <Table
                    columns={columns(getPortfolioNames(data))}
                    size="small"
                    loading={loading}
                    dataSource={preparedData}
                    style={{ marginTop: "1rem" }}
                />
            </Card>
        </Col>
    )
}

export default CurrencyOperationsTable

const columns = (portfolios: string[]) => [
    {
        key: "name",
        title: "Название",
        render: (_items: any, item: any) => {
            return <Text>{item.currencyAction.name}</Text>
        },
    },
    {
        key: "price",
        title: "Сумма",
        dataIndex: "price",
        sorter: (a: any, b: any) => a.price - b.price,
        render: (_items: any, item: any) => {
            return (
                <Text>
                    {getCurrency(item.price, getSymbol(item.currencyId))}
                </Text>
            )
        },
    },
    {
        key: "currencyName",
        title: "Валюта",
        dataIndex: "currencyName",
    },
    {
        key: "portfolio",
        title: "Портфель",
        dataIndex: "portfolio",
        filters: portfolios.map((p) => ({ text: p, value: p })),
        onFilter: (value: any, record: any) =>
            record.portfolio.name.indexOf(value) === 0,
        render: (_items: any, item: any) => {
            return <Text>{item.portfolio.name}</Text>
        },
    },
    {
        key: "date",
        title: "Дата",
        dataIndex: "date",
        sorter: (a: any, b: any) => Date.parse(a.date) - Date.parse(b.date),
        render: (_items: any, item: any) => {
            return <Text>{getNumericStringDate(item.date)}</Text>
        },
    },
]

const getPortfolioNames = (data: CurrencyOperationsQuery | undefined) => {
    return getAllValues(
        data?.allCurrencyOperations || [],
        (item) => item.portfolio.name
    )
}
