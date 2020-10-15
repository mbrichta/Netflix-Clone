import React from 'react'
import JumboData from '../fixtures/jumbo.json'
import Jumbotron from '../components/jumbotron'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {JumboData.map(item => (
                <Jumbotron key={item.id}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt} />
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}