import React, { useState } from "react"
import { Grid, GridRow, Menu, MenuItem } from "semantic-ui-react"
import { useHistory, useRouteMatch } from "react-router-dom"

const SchoolMenu = () => {
    let { path, url } = useRouteMatch()
    const [item, setItem] = useState('schools')

    const history = useHistory()

    const handleClick = (event, { name }) => {
        setItem(name)
        history.push(`${path}/${name}`)
    };

    const menuItems = [
        'schools',
        'pics',
        'ratings',
        'links',
        'image'
    ]

    return (
        <Grid>
            <GridRow only="mobile">
                <Menu fluid tabular>
                    {menuItems.map((menu, index) => (
                        <MenuItem
                            name={menu}
                            active={item === menu}
                            onClick={handleClick} />
                    ))}
                </Menu>
            </GridRow>
            <GridRow only="tablet computer">
                <Menu fluid vertical tabular>
                    {menuItems.map((menu, index) => (
                        <MenuItem
                            name={menu}
                            active={item === menu}
                            onClick={handleClick} />
                    ))}
                </Menu>
            </GridRow>
        </Grid>
    )
}

export default SchoolMenu

