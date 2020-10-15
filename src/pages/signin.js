import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'

export default function Signin() {

    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' | emailAddress === ''

    const handleSubmit = e => {
        e.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })

    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Inner onSubmit={handleSubmit}>
                        <Form.Input
                            placeholder="Email Adress"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="Submit">Sign In</Form.Submit>
                        <Form.Text>
                            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign Up Now</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                    </Form.Inner>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}