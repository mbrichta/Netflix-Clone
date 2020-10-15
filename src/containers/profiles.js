import userEvent from '@testing-library/user-event'
import React from 'react'
import { Header, Profile } from '../components'
import * as ROUTES from '../constants/routes'
import Logo from '../logo.svg'

export function SelectProfileContainer({ user, setProfile }) {

    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={Logo} />
                </Header.Frame>
            </Header>
            <Profile>
                <Profile.Title>Who's watching?</Profile.Title>
                <Profile.List>
                    <Profile.Item
                        onClick={() => setProfile({
                            displayName: user.displayName,
                            photoUrl: user.photoUrl
                        })}

                    >
                        <Profile.Picture src={user.photoUrl} />
                        <Profile.Name>{user.displayName}</Profile.Name>
                    </Profile.Item>
                </Profile.List>
            </Profile>
        </>
    )
}