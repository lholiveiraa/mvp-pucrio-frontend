import logoImg from '../../assets/logo-pegga.png'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewProductsModal: () => void;
}

export function Header({ onOpenNewProductsModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Pegga" />
                <button type="button" onClick={onOpenNewProductsModal}>
                    Adicionar produto
                </button>
            </Content>
        </Container>
    )
}