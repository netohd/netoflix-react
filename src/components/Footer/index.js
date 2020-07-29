import styled from 'styled-components';
import Logo from '../Logo';

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black);
    color: var(--color-gray-light);
    padding: 20rem 0;
    border-top: 4px solid var(--color-primary);

    & > ${Logo} {
        margin-bottom: 20rem;
    }
`;

export default Footer;