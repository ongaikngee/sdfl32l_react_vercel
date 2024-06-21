import React from "react"
import SchoolMenu from "../components/SchoolMenu"
import { Grid, GridColumn, GridRow } from "semantic-ui-react"
import SchoolRouterSwitch from "../components/SchoolRouterSwitch"

const SchoolRouter = () => {
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
                            <SchoolRouterSwitch />
                        </GridColumn>
                    </GridRow>
                </GridColumn>
            </GridRow>
            <GridRow only="tablet computer">
                <GridColumn width={4}>
                    <SchoolMenu />
                </GridColumn>
                <GridColumn width={12}>
                    <SchoolRouterSwitch />
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default SchoolRouter