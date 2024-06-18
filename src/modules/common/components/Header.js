
import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import AuthContext from "../../auth/context/AuthContext"
import { COLORS } from "../constants/common"
import { Grid, GridColumn, GridRow, Menu, MenuItem, MenuMenu, Icon } from "semantic-ui-react"


const Header = () => {
    const [item, setItem] = useState('')
    let { user, logoutUser } = useContext(AuthContext)

    const history = useHistory();

    const handleClick = (event, { name }) => {
        setItem(name)
        history.push(`/${name}`)
    }

    return (
        <Grid>
            <GridRow columns={1} only='mobile'>
                <GridColumn>
                    <Menu icon >
                        <MenuItem
                            name=''
                            active={item === ''}
                            onClick={handleClick}
                            disabled={!user} >
                            <Icon name='home' color={COLORS.semantic_primary} disabled={!user} />
                        </MenuItem>
                        <MenuItem
                            name='schools'
                            active={item === 'schools'}
                            onClick={handleClick}
                            disabled={!user}>
                            <Icon name='building' color={COLORS.semantic_primary} disabled={!user} />
                        </MenuItem>
                        <MenuMenu position='right'>
                            <MenuItem
                                name='semantic'
                                active={item === 'semantic'}
                                onClick={handleClick}
                                disabled={!user}>
                                <Icon name='shield' color={COLORS.semantic_primary} disabled={!user} />
                            </MenuItem>
                            {user ? (<MenuItem onClick={logoutUser}><Icon name='log out' color={COLORS.semantic_primary} /></MenuItem>) :
                                (<MenuItem name='login' onClick={handleClick}><Icon name='sign in' color={COLORS.semantic_primary} /></MenuItem>)
                            }
                        </MenuMenu>
                    </Menu>
                </GridColumn>
            </GridRow>
            <GridRow columns={1} only='tablet computer'>
                <GridColumn>
                    <Menu icon='labeled'>
                        <MenuItem
                            name=''
                            active={item === ''}
                            onClick={handleClick}
                            disabled={!user}>
                            <Icon name='home' color={COLORS.semantic_primary} disabled={!user} />Home
                        </MenuItem>
                        <MenuItem
                            name='schools'
                            active={item === 'schools'}
                            onClick={handleClick}
                            disabled={!user}>
                            <Icon name='building' color={COLORS.semantic_primary} disabled={!user} />Schools
                        </MenuItem>
                        <MenuMenu position='right'>
                            <MenuItem
                                name='semantic'
                                active={item === 'semantic'}
                                onClick={handleClick}
                                disabled={!user}>
                                <Icon name='shield' color={COLORS.semantic_primary} disabled={!user} />Semantic
                            </MenuItem>
                            {user ? (<MenuItem onClick={logoutUser}><Icon name='log out' color={COLORS.semantic_primary} />Logout</MenuItem>) :
                                (<MenuItem name='login' onClick={handleClick}><Icon name='sign in' color={COLORS.semantic_primary} />Login</MenuItem>)
                            }
                        </MenuMenu>
                    </Menu>
                </GridColumn>
            </GridRow>
        </Grid>
    )
}

export default Header