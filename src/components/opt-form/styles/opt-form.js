import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 20px;
    flex-wrap: wrap;

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Button = styled.button`
    display: felx;
    align-items: center;
    height: 60px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: none;
    cursor: pointer;

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    &:hover {
        background: #f40612;
    }

    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
`

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: none;
    padding: 10px;
    height: 60px;
    box-sizing: border-box;
`

export const Text = styled.p`
    font-size: 19px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`