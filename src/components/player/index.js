import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles/player'

export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {

    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Button = function PayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps} >Play</Button>
}

Player.Video = function PayerVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)

    return showPlayer ?
        ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
                <Inner>
                    <video type="video/mp4" id="netflix-player" controls>
                        <source src="/videos/Oldboy.mp4" type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        ) : null
}