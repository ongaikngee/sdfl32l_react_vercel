import React from 'react'
import { GridColumn, GridRow, Segment } from 'semantic-ui-react';
import HomeRadarChartComponent from "../components/charts/HomeRadarChartComponent";
import HomeDoughnutChartComponent from "../components/charts/HomeDoughnutChartComponent"

const HomeChartsContainerComponents = () => {
  return (
    <GridRow columns={2}>
        <GridColumn mobile={16} tablet={8} computer={8}>
            <Segment padded='very' color="blue" textAlign='center'>
                Stats
                <HomeDoughnutChartComponent />
            </Segment>
        </GridColumn>
        <GridColumn mobile={16} tablet={8} computer={8}>
            <Segment padded='very' color="violet" textAlign='center'>
                Chart Radar
                <HomeRadarChartComponent />
            </Segment>
        </GridColumn>
    </GridRow>
  )
}

export default HomeChartsContainerComponents
