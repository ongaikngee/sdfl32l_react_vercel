import React, { useContext } from "react"
import { Button, Form, Input, FormField, Label, Header } from 'semantic-ui-react'
import AuthContext from "../context/AuthContext"
import { COLORS } from "../../common/constants/common"

export default function LoginFormComponent() {
    let { errors, loginUser } = useContext(AuthContext)

    return (
        <Form onSubmit={loginUser}>
            <Header as='h2' color={COLORS.semantic_primary}>Sign in</Header>
            <FormField>
                <Input
                    icon='user'
                    iconPosition='left'
                    name='username'
                    placeholder='Enter Username'
                    error={!!errors.username}
                    focus
                />
                {errors.username && (
                    <Label basic color='red' pointing>
                        {errors.username}
                    </Label>
                )}
            </FormField>
            <FormField>
                <Input
                    icon='lock'
                    iconPosition='left'
                    name='password'
                    type="password"
                    placeholder='Enter Password'
                    error={!!errors.password}
                />
                {errors.password && (
                    <Label basic color='red' pointing>
                        {errors.password}
                    </Label>
                )}
            </FormField>
            <FormField>
                <Button compact color={COLORS.semantic_primary} type='submit'>Submit</Button>
            </FormField>
        </Form>
    )
}