import { Summary } from '../Summary'
import { ProdutosTable } from '../ProdutosTable';

import { Container } from './styles';

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <ProdutosTable />
        </Container>
    );
}