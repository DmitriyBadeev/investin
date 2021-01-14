import { Col, message, Table, Tooltip } from "antd"
import { H4, Text, SmallText } from "GeneralStyles"
import Card from "components/cards/Card"
import React, { useEffect } from "react"
import { getDoubleCurrency } from "helpers/financeHelpers"
import { useFondReportsLazyQuery } from "finance-types"
import { NumberIndicatior } from "components/numbers/Indicator"

type propTypes = {
    portfolios: number[]
}

const FondTable: React.FC<propTypes> = (props) => {
    const [query, { data, loading, error }] = useFondReportsLazyQuery()

    useEffect(() => {
        query({
            variables: {
                portfolioIds: props.portfolios,
            },
        })
    }, [query, props.portfolios])

    if (error) message.error(error.message)

    const reports = data?.aggregateFonds?.map((s, i) => {
        return {
            key: i,
            ...s,
        }
    })

    return (
        <Col span={24}>
            <Card title={<H4>Фонды</H4>}>
                <Table
                    columns={fondColumns}
                    size="small"
                    loading={loading}
                    dataSource={reports}
                    pagination={false}
                />
            </Card>
        </Col>
    )
}

export default FondTable

const fondColumns = [
    {
        key: "name",
        title: "Название",
        dataIndex: "name",
        render: (_items: any, item: any) => {
            return (
                <>
                    <Text>{item.name}</Text> <br />
                    <SmallText $color="grey2">{item.ticket}</SmallText>
                </>
            )
        },
    },
    {
        key: "amount",
        title: "Кол-во",
        dataIndex: "amount",
        sorter: (a: any, b: any) => a.amount - b.amount,
    },
    {
        key: "price",
        title: "Текущая цена",
        dataIndex: "price",
        sorter: (a: any, b: any) => a.price - b.price,
        render: (_items: any, item: any) => {
            return (
                <Tooltip title={`Время обновления: ${item.updateTime}`}>
                    <Text>{getDoubleCurrency(item.price)}</Text> <br />
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
        title: "Стоимость",
        dataIndex: "allPrice",
        sorter: (a: any, b: any) => a.allPrice - b.allPrice,
        render: (_items: any, item: any) => {
            return <Text>{getDoubleCurrency(item.allPrice)}</Text>
        },
    },
    {
        key: "boughtPrice",
        title: "Потрачено",
        dataIndex: "boughtPrice",
        sorter: (a: any, b: any) => a.boughtPrice - b.boughtPrice,
        render: (_items: any, item: any) => {
            return <Text>{getDoubleCurrency(item.boughtPrice)}</Text>
        },
    },
    {
        key: "paperProfit",
        title: "Бумажная прибыль",
        dataIndex: "paperProfit",
        sorter: (a: any, b: any) => a.paperProfit - b.paperProfit,
        render: (_items: any, item: any) => {
            return (
                <>
                    <NumberIndicatior
                        number={item.paperProfit}
                        type="currency"
                    />
                    <br />
                    <NumberIndicatior
                        number={item.paperProfitPercent}
                        type="percent"
                        size="small"
                    />
                </>
            )
        },
    },
]
