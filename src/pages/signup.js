import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'

export default function Signup() {

    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === "" | emailAddress === '' | password === ''

    const handleSignup = e => {
        e.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoUrl: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE)
                    })
            ).catch((error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Inner onSubmit={handleSignup}>
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Adress"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="Submit">Sign Up</Form.Submit>
                        <Form.Text>
                            Already a User? <Form.Link to={ROUTES.SIGN_IN}>Sign In now.</Form.Link>
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