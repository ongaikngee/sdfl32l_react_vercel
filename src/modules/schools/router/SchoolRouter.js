import React from "react"
import SchoolMenu from "../components/SchoolMenu"
import SchoolListingPage from "../pages/SchoolListingPage"
import School01Page from "../pages/School01Page"
import School02Page from "../pages/School02Page"
import School03Page from "../pages/School03Page"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import { Grid, GridColumn } from "semantic-ui-react"

const SchoolRouter = () => {
    let { path, url } = useRouteMatch()
    return (
        <Grid>
            <GridColumn width={4}>
                <SchoolMenu />
            </GridColumn>
            <GridColumn width={12}>
                <Switch>
                    <Route exact path={`${path}`} component={SchoolListingPage} />
                    <Route path={`${path}/bio`} component={SchoolListingPage} />
                    <Route path={`${path}/pics`} component={School01Page} />
                    <Route path={`${path}/companies`} component={School02Page} />
                    <Route path={`${path}/links`} component={School03Page} />
                </Switch>
            </GridColumn>
        </Grid>
    )
}

export default SchoolRouter