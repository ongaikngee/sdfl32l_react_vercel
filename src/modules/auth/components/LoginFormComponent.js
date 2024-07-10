import React, { useContext } from "react"
import { Button, Form, FormInput } from 'semantic-ui-react'
import AuthContext from "../context/AuthContext"
import { COLORS } from "../../common/constants/common"

export default function LoginFormComponent() {
    let { errors, loginUser } = useContext(AuthContext)
    return (
        <Form onSubmit={loginUser}>
            <FormInput
                label='Username'
                name='username'
                placeholder='Enter Username'
                error={errors.username && { content: errors.username }}
            />
            <FormInput
                label='Password'
                name='password'
                type="password"
                placeholder='Enter Password'
                error={errors.password && { content: errors.password }}
            />
            <Button compact color={COLORS.semantic_primary} type='submit'>Submit</Button>
        </Form>
    )
}