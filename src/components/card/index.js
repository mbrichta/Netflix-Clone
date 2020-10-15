import React, { createContext, useState, useContext } from 'react'
import {
    Container,
    Group,
    Title,
    Subtitle,
    Text,
    Meta,
    Item,
    Image,
    Feature,
    Entities,
    Content,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity
} from './styles/card'


const FeatureContext = createContext()

export default function Card({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState(false)

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Card.Subtitle = function CardSubtitle({ children, ...restProps }) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>
}

Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...restProps }) {

    const { setShowFeature, setItemFeature, showFeature } = useContext(FeatureContext)

    return (
        <Item
            {...restProps}
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}>
            {children}
        </Item>
    )
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}

Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);

    return showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} {...restProps}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>

                {children}
            </Content>
        </Feature>
    ) : null
}