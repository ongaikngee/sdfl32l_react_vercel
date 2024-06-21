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

    const menuItems = [
        'bio',
        'pics',
        'companies',
        'links',
        'image'
    ]

    return (
        <Menu fluid vertical tabular>
            {menuItems.map((menu, index) => (
                <MenuItem 
                name={menu}
                active={item === menu}
                onClick={handleClick} />
            ))}
        </Menu>
    )
}

export default SchoolMenu

