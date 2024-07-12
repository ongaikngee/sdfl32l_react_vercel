import React, { useState, useContext } from "react"
import { Button, Form, Input, FormField, Label, Header } from 'semantic-ui-react'
import AuthContext from "../context/AuthContext"
import { COLORS } from "../../common/constants/common"

export default function LoginFormComponent() {
    const [showPassword, setShowPassword] = useState(false)
    let { errors, loginUser } = useContext(AuthContext)

    const toggleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

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
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter Password'
                    error={!!errors.password}
                    action={{
                        icon: showPassword ? 'eye slash' : 'eye',
                        onClick: toggleShowPassword
                    }}
                    focus
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