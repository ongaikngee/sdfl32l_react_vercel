import React, { useState } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import {
    Menu,
    MenuItem,
    MenuMenu,
} from 'semantic-ui-react'

const SemanticMenu = () => {

    const [item, setItem] = useState('grid')

    let { path, url } = useRouteMatch()
    const history = useHistory()

    const handleClick = (event, { name }) => {
        setItem(name)
        history.push(`${path}/${name}`)
    }

    return (
        <div>
            <Menu vertical>
                <MenuItem>
                    Element Position
                    <MenuMenu>
                        <MenuItem
                            name='grid'
                            active={item === 'grid'}
                            onClick={handleClick} />
                        <MenuItem
                            name='segment'
                            active={item === 'segment'}
                            onClick={handleClick} />
                        <MenuItem>
                            Menu
                        </MenuItem>
                        <MenuItem>
                            Container
                        </MenuItem>
                    </MenuMenu>
                </MenuItem>
                <MenuItem>
                    Responsive
                </MenuItem>
                <MenuItem>
                    Other
                    <MenuMenu>
                        <MenuItem
                            name='getSchoolListing'
                            active={item === 'getSchoolListing'}
                            onClick={handleClick} />
                        <MenuItem
                            name='schoolData'
                            active={item === 'schoolData'}
                            onClick={handleClick} />
                        <MenuItem>item 3</MenuItem>
                    </MenuMenu>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default SemanticMenu