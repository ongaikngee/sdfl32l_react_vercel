import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"
import SemanticMenu from "../components/SemanticMenu"
import SemanticGridPage from "../pages/SemanticGridPage"
import SemanticSegmentPage from "../pages/SemanticSegmentPage"
import SemanticSchoolListingAPIPage from "../pages/SemanticSchoolListingAPIPage"
import SemanticSchoolDataPage from "../pages/SemanticSchoolDataPage"
import {
    Grid,
    GridColumn,
} from 'semantic-ui-react'

const SemanticRouter = () => {
    let { path, url } = useRouteMatch()
    return (
        <div>
            <Grid columns={2}>
                <GridColumn width={6}>
                    <SemanticMenu />
                </GridColumn>
                <GridColumn width={10}>
                    <Switch>
                        <Route exact path={`${path}`} component={SemanticGridPage} />
                        <Route path={`${path}/grid`} component={SemanticGridPage} />
                        <Route path={`${path}/segment`} component={SemanticSegmentPage} />
                        <Route path={`${path}/getSchoolListing`} component={SemanticSchoolListingAPIPage} />
                        <Route path={`${path}/schoolData`} component={SemanticSchoolDataPage} />
                    </Switch>
                </GridColumn>
            </Grid>
        </div>
    )
}

export default SemanticRouter