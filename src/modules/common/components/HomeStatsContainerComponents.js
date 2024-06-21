import React from 'react'
import { GridColumn, GridRow } from 'semantic-ui-react';
import HomeStatsComponent from './HomeStatsComponent';

const HomeStatsContainerComponents = () => {

    const column_mobile = 8
    const column_table = 8
    const column_computer = 4
    const statsForTopRow = [
        { title: 'Rank', value: '20th', color: 'red' },
        { title: 'Tank', value: '16%', color: 'orange' },
        { title: 'Score', value: '39/50', color: 'yellow' },
        { title: 'Position', value: '10th', color: 'teal' }
    ]
  return (
    <GridRow columns={4}>
        {statsForTopRow.map((item, index) => (
            <GridColumn key={index} mobile={column_mobile} tablet={column_table} computer={column_computer}>
                <HomeStatsComponent item={item} />
            </GridColumn>
        ))}
    </GridRow>
  )
}

export default HomeStatsContainerComponents
