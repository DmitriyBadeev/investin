import React from "react"
import { Col, message, Row, Table } from "antd"
import Card from "components/cards/Card"
import { H4, Text } from "GeneralStyles"
import { getNumericStringDate } from "helpers/dateHelpers"
import { UserPaymentsQuery, useUserPaymentsQuery } from "finance-types"
import { getCurrency } from "helpers/financeHelpers"
import { getAllValues } from "helpers/arrayHelpers"
import CreatePaymentDrawer from "components/drawers/CreatePaymentDrawer"

const PaymentsTable: React.FC = () => {
    const { data, loading, error, refetch } = useUserPaymentsQuery()

    if (error) message.error(error.message)

    const preparedData = data?.userPayments?.map((s, i) => {
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
                        <H4>Выплаты</H4>
                        <CreatePaymentDrawer update={() => refetch()} />
                    </Row>
                }
            >
                <Table
                    columns={columns(data)}
                    size="small"
                    loading={loading}
                    dataSource={preparedData}
                    style={{ marginTop: "1rem" }}
                />
            </Card>
        </Col>
    )
}

export default PaymentsTable

const columns = (data: UserPaymentsQuery | undefined) => {
    const portfolioNames = getAllValues(
        data?.userPayments,
        (item) => item.portfolio.name
    )

    return [
        {
            key: "ticket",
            title: "Тикет",
            dataIndex: "ticket",
        },
        {
            key: "amount",
            title: "Кол-во",
            dataIndex: "amount",
        },
        {
            key: "paymentValuePerAsset",
            title: "За штуку",
            sorter: (a: any, b: any) => a.paymentValue - b.paymentValue,
            render: (_items: any, item: any) => {
                return (
                    <Text>{getCurrency(item.paymentValue / item.amount)}</Text>
                )
            },
        },
        {
            key: "paymentValue",
            title: "Сумма",
            sorter: (a: any, b: any) => a.paymentValue - b.paymentValue,
            render: (_items: any, item: any) => {
                return <Text>{getCurrency(item.paymentValue)}</Text>
            },
        },
        {
            key: "portfolio",
            title: "Портфель",
            filters: portfolioNames.map((p) => ({ text: p, value: p })),
            onFilter: (value: any, record: any) =>
                record.portfolio.name.indexOf(value) === 0,
            render: (_items: any, item: any) => {
                return <Text>{item.portfolio.name}</Text>
            },
        },
        {
            key: "date",
            title: "Дата",
            sorter: (a: any, b: any) => Date.parse(a.date) - Date.parse(b.date),
            render: (_items: any, item: any) => {
                return <Text>{getNumericStringDate(item.date)}</Text>
            },
        },
    ]
}
