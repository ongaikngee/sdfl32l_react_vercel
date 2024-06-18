import React from "react"
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import mockImage from '../../common/assets/images/image.png'

const SchoolListingPage = () => {
    return (
        <Grid>
            <GridRow columns={3}>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
            </GridRow>

            <GridRow columns={4}>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
            </GridRow>

            <GridRow columns={5}>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
                <GridColumn>
                    <img src={mockImage} />
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default SchoolListingPage