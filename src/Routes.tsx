import React, { useEffect } from "react"
import { useLocation, Switch, Route } from "react-router-dom"

import Portfolios from "pages/Portfolios"
import Market from "pages/Market"
import Operations from "pages/Operations"

const Routes: React.FC = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/">
                    <Portfolios />
                </Route>
                <Route exact path="/market">
                    <Market />
                </Route>
                <Route exact path="/operations">
                    <Operations />
                </Route>
            </Switch>
        </ScrollToTop>
    )
}

export default Routes

const ScrollToTop: React.FC = (props) => {
    let location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return <>{props.children}</>
}
