import React from "react"
import { AUTH_INTRO } from "../../common/constants/constant_auth"
import { Segment, Container, Header, Grid, GridRow, GridColumn, Divider } from 'semantic-ui-react'
import LoginFormComponent from "../components/LoginFormComponent"
import { APP_TITLE, LOREM_IPSUM, COLORS } from "../../common/constants/common"

const LoginPage = () => {
    return (
        <div>
            <Container className="ui padded segment basic">
                <Header as='h2' color={COLORS.semantic_primary}>{APP_TITLE}</Header>
                <p>{AUTH_INTRO}</p>
            </Container>
            <Grid>
                <GridRow columns={2} only='mobile' centered>
                    <GridColumn width='12'>
                        <Segment color={COLORS.semantic_primary}>
                            <Grid>
                                <GridRow>
                                    <GridColumn>
                                        <LoginFormComponent />
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Segment>
                    </GridColumn>
                </GridRow>
                <GridRow columns={1} only='mobile'>
                    <GridColumn verticalAlign='middle'>
                        <Container className="ui padded segment basic">
                            <Header as='h4' color={COLORS.semantic_primary}>{APP_TITLE}</Header>
                            {LOREM_IPSUM.paragraph}
                        </Container>
                    </GridColumn>
                </GridRow>
                <GridRow columns={2} only='tablet computer'>
                    <Segment color={COLORS.semantic_primary}>
                        <Grid columns={2} relaxed='very' stackable>
                            <GridColumn>
                                <LoginFormComponent />
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
        </div>
    )
}

export default LoginPage