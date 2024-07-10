import React from 'react'
import { Route, Switch, useRouteMatch } from "react-router-dom"
import SchoolListingPage from "../pages/SchoolListingPage"
import School01Page from "../pages/School01Page"
import School02Page from "../pages/School02Page"
import SchoolRegPhasesInfoPage from "../pages/SchoolRegPhasesInfoPage"
import SchoolImageTemplatePage from "../pages/SchoolImageTemplatePage"
import SchoolRegResultPage from '../pages/SchoolRegResultPage'

export const SCHOOL_MENU = [
    { path: 'schools', page: SchoolListingPage },
    { path: 'Phases', page: SchoolRegPhasesInfoPage },
    { path: 'pics', page: School01Page },
    { path: 'ratings', page: School02Page },
    { path: 'image', page: SchoolImageTemplatePage },
]

const SchoolRouterSwitch = () => {
    let { path, url } = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}`} component={SchoolListingPage} />
            <Route path={`${path}/schoolResult/:school`} component={SchoolRegResultPage} />
            {SCHOOL_MENU.map((menu) => {
                return (
                    <Route path={`${path}/${menu.path}`} component={menu.page} />
                )
            })}
            <Route path={`${path}/:school`} component={SchoolListingPage} />
        </Switch>
    )
}

export default SchoolRouterSwitch
