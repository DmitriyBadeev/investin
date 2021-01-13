export const THIN_NON_BREAKING_SPACE = "\u202F"
export const NON_BREAKING_SPACE = "\u00A0"

export const getIntegerPart = (number: number) => {
    return Math.trunc(number / 100)
        .toString()
        .replace(/\d(?=(\d{3})+$)/g, `$&${THIN_NON_BREAKING_SPACE}`)
}

export const getFractionalPart = (number: number) => {
    const lastDigit = number % 10
    number = Math.trunc(number / 10)
    const secondDigit = number % 10

    return `${secondDigit}${lastDigit}`
}

export const getCurrency = (number: number) => {
    return `${getIntegerPart(number)},${getFractionalPart(
        number
    )}${NON_BREAKING_SPACE}₽`
}

export const getDoubleCurrency = (number: number) => {
    return number.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
    })
}

export const getPercent = (percent: number) => {
    return `${percent.toLocaleString("ru")}${NON_BREAKING_SPACE}%`
}
