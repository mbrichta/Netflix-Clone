import styled from 'styled-components'

export const Container = styled.section`
    display:flex;
    border-bottom: 8px solid #222;
`

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`

export const Title = styled.h1`
    color: white;    
    font-size: 50px;
    line-height: 1.1;
    text-align: center;
    margin-top: 0;
    margin-bottom: 60px;

    @media (max-width: 600px) {
        font-size: 35px;
        margin-bottom: 40px;
    }
`

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    margin-bottom: 3px;
    font-size: 26px;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    box-sizing: border-box;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        
        @media (max-width: 600px) {
            width: 16px;
        }
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`

export const Body = styled.div`
    width: 100%;
    box-sizing: border-box;
    font-size: 26px;
    background: #303030;
    padding: 0.8em 1.2em 0.8em 1.2em;
    user-select: none;
    align-items: center;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`

export const Frame = styled.div`
    margin-bottom: 40px;
    max-width: 1200px;
`