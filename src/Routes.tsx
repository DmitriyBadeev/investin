import React, { useEffect } from "react"
import { useLocation, Switch, Route } from "react-router-dom"

import Portfolios from "pages/Portfolios"

const Routes: React.FC = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route exact path="/">
                    <Portfolios />
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
