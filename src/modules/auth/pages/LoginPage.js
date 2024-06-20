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
            <Grid>
                <GridRow columns={1} only='mobile'>
                    <Segment color={COLORS.semantic_primary}>
                        <Grid>
                            <GridRow>
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
                            </GridRow>
                        </Grid>
                    </Segment>
                </GridRow>

                <GridRow columns={1} only='mobile'>
                    <GridColumn verticalAlign='middle'>
                        <Header as='h4' color={COLORS.semantic_primary}>{APP_TITLE}</Header>
                        {LOREM_IPSUM.paragraph}
                    </GridColumn>
                </GridRow>
                <GridRow columns={2} only='tablet computer'>
                    <h1>This is computer</h1>
                    <Segment color={COLORS.semantic_primary}>
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
                </GridRow>
            </Grid>
            {/* <Segment color={COLORS.semantic_primary}>
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
            </Segment> */}
            {/* <Segment>
                <Grid>
                    <GridRow columns={1} only='mobile'>
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
                    </GridRow>
                    <GridRow columns={1} only='mobile'>
                        <GridColumn verticalAlign='middle'>
                            <Header as='h4' color={COLORS.semantic_primary}>{APP_TITLE}</Header>
                            {LOREM_IPSUM.paragraph}
                        </GridColumn>
                    </GridRow>
                    <GridRow columns={2} only='tablet computer'>
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
                    </GridRow>
                </Grid>
            </Segment> */}
        </div>
    )
}

export default LoginPage