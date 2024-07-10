import React, { useState } from "react"
import { Grid, GridRow, Menu, MenuItem } from "semantic-ui-react"
import { useHistory, useRouteMatch } from "react-router-dom"
import { SCHOOL_MENU } from "./SchoolRouterSwitch"

const SchoolMenu = () => {
    let { path } = useRouteMatch()
    const [item, setItem] = useState('schools')

    const history = useHistory()

    const handleClick = (event, { name }) => {
        setItem(name)
        history.push(`${path}/${name}`)
    };

    return (
        <Grid>
            <GridRow only="mobile">
                <Menu fluid tabular>
                    {SCHOOL_MENU.map((menu, index) => (
                        <MenuItem
                            key={index}
                            name={menu.path}
                            active={item === menu.path}
                            onClick={handleClick} />
                    ))}
                </Menu>
            </GridRow>
            <GridRow only="tablet computer">
                <Menu fluid vertical tabular>
                    {SCHOOL_MENU.map((menu, index) => (
                        <MenuItem
                            key={index}
                            name={menu.path}
                            active={item === menu.path}
                            onClick={handleClick} />
                    ))}
                </Menu>
            </GridRow>
        </Grid>
    )
}

export default SchoolMenu

