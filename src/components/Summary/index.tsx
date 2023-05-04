import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
import { useProducts } from '../../hooks/useProducts';
// import { ProdutosContext } from '../../ProdutosContext';

export function Summary() {
    const { produtos } = useProducts();

    console.log(produtos);

    return (
        <Container>
            <div>
                <header>
                    <p>Produtos cadastrados</p>
                    {/* <img src={incomeImg} alt="Entradas" /> */}
                </header>
                <strong>1000</strong>
            </div>

            <div>
                <header>
                    <p>Venda diária</p>
                    {/* <img src={outcomeImg} alt="Saídas" /> */}
                </header>
                <strong>$ 500</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total de vendas mensal</p>
                    {/* <img src={totalImg} alt="Total" /> */}
                </header>
                <strong>R$ 500</strong>
            </div>
        </Container>
    )
}