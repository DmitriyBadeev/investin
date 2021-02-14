import { Col, message, Space, Table, Tooltip } from "antd"
import { Text, SmallText } from "GeneralStyles"
import Card from "components/cards/Card"
import React, { useEffect } from "react"
import { getDoubleCurrency } from "helpers/financeHelpers"
import { AssetsQuery, useAssetsLazyQuery } from "finance-types"
import { NumberIndicatior } from "components/numbers/Indicator"
import Sparkline from "components/charts/Sparkline"
import AssetIcon from "components/logo/AssetIcon"
import { getAllValues } from "helpers/arrayHelpers"
import { Link } from "react-router-dom"

const StockMarketTable: React.FC = () => {
    const [query, { data, loading, error }] = useAssetsLazyQuery()

    useEffect(() => {
        query({
            variables: {
                type: "Акция",
            },
        })
    }, [query])

    if (error) message.error(error.message)

    const reports = data?.assets?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    return (
        <Col span={24}>
            <Card title={null}>
                <Table
                    columns={columns(data)}
                    size="small"
                    loading={loading}
                    dataSource={reports}
                    pagination={{
                        defaultPageSize: 50,
                    }}
                />
            </Card>
        </Col>
    )
}

export default StockMarketTable

const columns = (data: AssetsQuery | undefined) => {
    const sectors = getAllValues(data?.assets, (item) => item.sector).filter(
        (item) => item
    )

    return [
        {
            key: "name",
            title: "Название",
            dataIndex: "shortName",
            render: (_items: any, item: any) => {
                return (
                    <Space>
                        <AssetIcon ticket={item.ticket} />
                        <div>
                            <Link to={`/market/${item.ticket}`}>
                                <Text>{item.shortName}</Text>
                            </Link>
                            <br />
                            <SmallText $color="grey2">{item.ticket}</SmallText>
                        </div>
                    </Space>
                )
            },
        },
        {
            key: "lotSize",
            title: "Лот",
            dataIndex: "lotSize",
        },
        {
            key: "price",
            title: "Текущая цена",
            dataIndex: "price",
            sorter: (a: any, b: any) => a.price - b.price,
            render: (_items: any, item: any) => {
                return (
                    <Tooltip title={`Время обновления: ${item.updateTime}`}>
                        <span>{getDoubleCurrency(item.price)}</span> <br />
                        <NumberIndicatior
                            number={item.priceChange}
                            type="percent"
                            size="small"
                        />
                    </Tooltip>
                )
            },
        },
        {
            key: "allPrice",
            title: "Стоимость лота",
            sorter: (a: any, b: any) =>
                a.price * a.lotSize - b.price * b.lotSize,
            render: (_items: any, item: any) => {
                return (
                    <Text>{getDoubleCurrency(item.price * item.lotSize)}</Text>
                )
            },
        },
        {
            key: "capitalization",
            title: "Капитализация",
            dataIndex: "capitalization",
            sorter: (a: any, b: any) => a.capitalization - b.capitalization,
            render: (_items: any, item: any) => {
                return <Text>{getDoubleCurrency(item.capitalization)}</Text>
            },
        },
        {
            key: "sector",
            title: "Сектор",
            width: 200,
            filters: sectors.map((p) => ({ text: p, value: p })),
            onFilter: (value: any, record: any) =>
                record.sector.indexOf(value) === 0,
            render: (_items: any, item: any) => {
                return <SmallText>{item.sector}</SmallText>
            },
        },
        {
            key: "Sparkline",
            title: "Изменение за неделю",
            render: (_items: any, item: any) => {
                return <Sparkline ticket={item.ticket} />
            },
        },
    ]
}
