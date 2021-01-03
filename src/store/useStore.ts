import React from "react"
import {PortfolioStore} from "./PortfolioStore"

const StoreContext = React.createContext({
    portfolioStore: new PortfolioStore()
})

const useStore = () => React.useContext(StoreContext)

export default useStore
