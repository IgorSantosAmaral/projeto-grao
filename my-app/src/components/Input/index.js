import styled from "styled-components";

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 70px;
    border-radius: 50px;
    width: 300px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        width: 250px;
    }

    @media (max-width: 480px) {
        width: 200px;
        padding: 15px 50px;
    }
`

export default Input