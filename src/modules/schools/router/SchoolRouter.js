import React from "react"
import SchoolMenu from "../components/SchoolMenu"
import SchoolListingPage from "../pages/SchoolListingPage"
import School01Page from "../pages/School01Page"
import School02Page from "../pages/School02Page"
import School03Page from "../pages/School03Page"
import SchoolImageTemplatePage from "../pages/SchoolImageTemplatePage"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import { Grid, GridColumn, GridRow } from "semantic-ui-react"

const SchoolRouter = () => {
    let { path, url } = useRouteMatch()
    return (
        <Grid>
            <GridRow only="mobile">
                <GridColumn>
                    <GridRow>
                        <GridColumn width={16}>
                            <SchoolMenu />
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn width={16}>
                            <Switch>
                                <Route exact path={`${path}`} component={SchoolListingPage} />
                                <Route path={`${path}/schools`} component={SchoolListingPage} />
                                <Route path={`${path}/pics`} component={School01Page} />
                                <Route path={`${path}/ratings`} component={School02Page} />
                                <Route path={`${path}/links`} component={School03Page} />
                                <Route path={`${path}/image`} component={SchoolImageTemplatePage} />
                            </Switch>
                        </GridColumn>
                    </GridRow>
                </GridColumn>
            </GridRow>
            <GridRow only="tablet computer">
                <GridColumn width={4}>
                    <SchoolMenu />
                </GridColumn>
                <GridColumn width={12}>
                    <Switch>
                        <Route exact path={`${path}`} component={SchoolListingPage} />
                        <Route path={`${path}/schools`} component={SchoolListingPage} />
                        <Route path={`${path}/pics`} component={School01Page} />
                        <Route path={`${path}/ratings`} component={School02Page} />
                        <Route path={`${path}/links`} component={School03Page} />
                        <Route path={`${path}/image`} component={SchoolImageTemplatePage} />
                    </Switch>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default SchoolRouter