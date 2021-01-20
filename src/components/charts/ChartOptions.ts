type TData = {
    portfolioId: number | undefined
    portfolioName: string | null | undefined
    data: any[][] | undefined
}

export const areaOptions = (data: TData[]) => ({
    chart: {
        type: "area",
        marginTop: 20,
        height: 430,
    },

    rangeSelector: {
        selected: 1,
        inputEnabled: false,

        buttons: [
            {
                type: "month",
                count: 1,
                text: "1м",
            },
            {
                type: "month",
                count: 3,
                text: "3м",
            },
            {
                type: "month",
                count: 6,
                text: "6м",
            },
            {
                type: "ytd",
                text: "YTD",
            },
            {
                type: "year",
                count: 1,
                text: "1г",
            },
            {
                type: "all",
                text: "Всё",
            },
        ],
    },

    scrollbar: {
        enabled: false,
    },

    tooltip: {
        xDateFormat: "%d.%m.%Y",
    },

    xAxis: {
        type: "datetime",
        labels: {
            align: "left",
        },
        gridLineWidth: 1,
    },
    credits: {
        enabled: false,
    },

    time: {
        timezoneOffset: -180,
    },

    series: data.map((d) => {
        return {
            name: d.portfolioName,
            data: d.data,
            threshold: null,
            tooltip: {
                valueDecimals: 2,
            },
            fillColor: "rgba(143, 97, 219, .1)",
            color: "#8F61DB",
        }
    }),
})
