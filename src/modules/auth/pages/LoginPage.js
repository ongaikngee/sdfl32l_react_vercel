import React from "react"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { APP_TITLE, LOREM_IPSUM, COLORS } from "../../common/constants/common"
import { AUTH_INTRO } from "../../common/constants/constant_auth"
import { Segment, Container, Header, Button, Form, Grid, GridRow, GridColumn, Divider, FormInput, FormGroup } from 'semantic-ui-react'

const LoginPage = () => {
    let { errors, loginUser } = useContext(AuthContext)
    return (
        <div>
            <Container>
                <Header as='h2' color={COLORS.semantic_primary}>{APP_TITLE}</Header>
                <p>{AUTH_INTRO}
                </p>
            </Container>
            <Segment color={COLORS.semantic_primary}>
                <h1>hello</h1>
                <Grid columns={2} relaxed='very' stackable>
                    <GridColumn>
                        <Form onSubmit={loginUser}>
                            <FormGroup>
                                <FormInput
                                    label='Username'
                                    name='username'
                                    placeholder='Enter Username'
                                    error={errors.username && { content: errors.username }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormInput
                                    label='Password'
                                    name='password'
                                    type="password"
                                    placeholder='Enter Password'
                                    error={errors.password && { content: errors.password }}
                                />
                            </FormGroup>
                            <Button compact color={COLORS.semantic_primary} type='submit'>Submit</Button>
                        </Form>
                    </GridColumn>

                    <GridColumn verticalAlign='middle'>
                        <Header as='h4' color={COLORS.semantic_primary}>{APP_TITLE}</Header>
                        {LOREM_IPSUM.paragraph}
                    </GridColumn>
                </Grid>

                <Divider vertical color={COLORS.semantic_primary}>Or</Divider>
            </Segment>
        </div>
    )
}

export default LoginPage