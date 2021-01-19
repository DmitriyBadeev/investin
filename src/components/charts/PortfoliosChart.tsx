import React, { useEffect } from "react"
import { Col, message } from "antd"
import Card from "components/cards/Card"
import Highcharts from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"
import { usePortfolioCostGraphLazyQuery } from "finance-types"
import Loading from "components/loading/Loading"
import { areaOptions } from "./ChartOptions"

type propTypes = {
    portfolios: number[]
}

Highcharts.setOptions({
    lang: {
        months: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ],
        shortMonths: [
            "Янв",
            "Фев",
            "Мар",
            "Апр",
            "Май",
            "Июн",
            "Июл",
            "Авг",
            "Сен",
            "Окт",
            "Ноя",
            "Дек",
        ],
        weekdays: [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Субота",
        ],
        rangeSelectorZoom: "Период",
        loading: "Загрузка...",
        decimalPoint: ",",
    },
})

const PortfoliosChart: React.FC<propTypes> = (props) => {
    const [query, { data, loading, error }] = usePortfolioCostGraphLazyQuery()

    useEffect(() => {
        query({
            variables: { portfolioId: props.portfolios[0] || 0 },
        })
    }, [query, props.portfolios])

    if (loading) {
        return (
            <Col span={15}>
                <Card title="Изменение стоимости портфеля">
                    <Loading height="400px" />
                </Card>
            </Col>
        )
    }

    if (error) message.error(error.message)

    const preparedData =
        data?.portfolioCostGraph?.map((valueTime) => {
            const value = (valueTime?.value || 0) / 100
            console.log(value, valueTime?.date, new Date(valueTime?.date))

            return [valueTime?.date || 0, value]
        }) || []

    console.log([
        ...preparedData,
        [1611006600000, 64460.48],
        [1611008600000, 61460.48],
    ])

    return (
        <Col span={15}>
            <Card title="Изменение стоимости портфеля">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={areaOptions(
                        [
                            ...preparedData,
                            [1611006600000, 64460.48],
                            [1611008600000, 61460.48],
                        ],
                        `Портфель с id=${props.portfolios[0]}`
                    )}
                    constructorType="stockChart"
                />
            </Card>
        </Col>
    )
}

export default PortfoliosChart
