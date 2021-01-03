import { observable, action, computed, makeObservable } from "mobx"
import img1 from "./sber.png"
import img2 from "./tin.png"

export type portfolioDataType = {
    id: number
    name: string
    img: any
}

class BooleanKeyValue {
    key: number
    value: boolean

    constructor(key: number, value: boolean) {
        this.key = key
        this.value = value
    }
}

export class PortfolioStore {
    constructor() {
        makeObservable(this, {
            activePortfolios: observable,
            togglePortfolio: action
        })
    }

    portfolios: portfolioDataType[] = [
        {
            id: 1,
            name: "Сбербанк Инвестиции",
            img: img1,
        },
        {
            id: 2,
            name: "Тинькофф Инвестиции",
            img: img2, 
        },
    ]

    generateActiveArray = () => {
        return this.portfolios.map((portfolio, index) => new BooleanKeyValue(portfolio.id, index === 0))
    }

    activePortfolios = observable(this.generateActiveArray())

    togglePortfolio(id: number) {
        const cloneActives = [...this.activePortfolios]
        const portfolio = this.activePortfolios.find(portfolio => portfolio.key === id)

        if (portfolio) {
            portfolio.value = !portfolio.value
            this.activePortfolios.replace(cloneActives)  
        }
    }

    @computed isActive(id: number) {
        return this.activePortfolios.find(isActive => isActive.key === id)?.value
    }
}