import React, { useState } from "react"
import { Menu, MenuItem } from "semantic-ui-react"
import { useHistory, useRouteMatch } from "react-router-dom"

const SchoolMenu = () => {
    let { path, url } = useRouteMatch()
    const [item, setItem] = useState('bio')

    const history = useHistory()

    const handleClick = (event, { name }) => {
        setItem(name)
        history.push(`${path}/${name}`)
    };

    return (
        <Menu fluid vertical tabular>
            <MenuItem
                name='bio'
                active={item === 'bio'}
                onClick={handleClick}
            />
            <MenuItem
                name='pics'
                active={item === 'pics'}
                onClick={handleClick}
            />
            <MenuItem
                name='companies'
                active={item === 'companies'}
                onClick={handleClick}
            />
            <MenuItem
                name='links'
                active={item === 'links'}
                onClick={handleClick}
            />
        </Menu>
    )
}

export default SchoolMenu

