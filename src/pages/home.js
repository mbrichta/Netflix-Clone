import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header'
import { Feature, OptForm } from '../components'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere. Cancel at anytime.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email adress" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Text>Ready to watch?
                    Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}