import React from "react"
import { Col, message, Table } from "antd"
import Card from "components/cards/Card"
import { H4, Text } from "GeneralStyles"
import { getNumericStringDate } from "helpers/dateHelpers"
import { useAssetOperationsQuery, AssetOperationsQuery } from "finance-types"
import { getCurrency } from "helpers/financeHelpers"
import { getAllValues } from "helpers/arrayHelpers"

const AssetOperationsTable: React.FC = () => {
    const { data, loading, error } = useAssetOperationsQuery()

    if (error) message.error(error.message)

    const preparedData = data?.allAssetOperations?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    return (
        <Col span={24}>
            <Card title={<H4>Операции по активам</H4>}>
                <Table
                    columns={columns(data)}
                    size="small"
                    loading={loading}
                    dataSource={preparedData}
                />
            </Card>
        </Col>
    )
}

export default AssetOperationsTable

const columns = (data: AssetOperationsQuery | undefined) => {
    const portfolioNames = getAllValues(
        data?.allAssetOperations,
        (item) => item.portfolio.name
    )

    const actions = getAllValues(
        data?.allAssetOperations,
        (item) => item.assetAction.name
    )

    const assetTypes = getAllValues(
        data?.allAssetOperations,
        (item) => item.assetType.name
    )

    return [
        {
            key: "ticket",
            title: "Тикет",
            dataIndex: "ticket",
        },
        {
            key: "assetType",
            title: "Тип актива",
            filters: assetTypes.map((p) => ({ text: p, value: p })),
            onFilter: (value: any, record: any) =>
                record.assetType.name.indexOf(value) === 0,
            render: (_items: any, item: any) => {
                return <Text>{item.assetType.name}</Text>
            },
        },
        {
            key: "name",
            title: "Операция",
            filters: actions.map((p) => ({ text: p, value: p })),
            onFilter: (value: any, record: any) =>
                record.assetAction.name.indexOf(value) === 0,
            render: (_items: any, item: any) => {
                return <Text>{item.assetAction.name}</Text>
            },
        },
        {
            key: "amount",
            title: "Кол-во",
            dataIndex: "amount",
        },
        {
            key: "paymentPricePerAsset",
            title: "За штуку",
            sorter: (a: any, b: any) => a.paymentPrice - b.paymentPrice,
            render: (_items: any, item: any) => {
                return (
                    <Text>{getCurrency(item.paymentPrice / item.amount)}</Text>
                )
            },
        },
        {
            key: "paymentPrice",
            title: "Сумма",
            sorter: (a: any, b: any) => a.paymentPrice - b.paymentPrice,
            render: (_items: any, item: any) => {
                return <Text>{getCurrency(item.paymentPrice)}</Text>
            },
        },

        {
            key: "portfolio",
            title: "Портфель",
            dataIndex: "portfolio",
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
            dataIndex: "date",
            sorter: (a: any, b: any) => Date.parse(a.date) - Date.parse(b.date),
            render: (_items: any, item: any) => {
                return <Text>{getNumericStringDate(item.date)}</Text>
            },
        },
    ]
}
