import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';
import container from '../../tools/container';

export const Header = styled.header`
    padding: 20rem 30rem;
    background-color: var(--color-black);
    border-bottom: 4px solid var(--color-primary);

    @media(max-width: 800px){
        padding: 15px 16px;
    }
`;

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};

    @media(max-width: 800px){
        justify-content: center;

        & > ${Logo} {
            height: 35px;
        }

        & > ${Button} {
            background-color: var(--color-primary);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
 `;