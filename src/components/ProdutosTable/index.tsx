import { useContext, useEffect } from "react";
import { api } from "../../services/api";
// import { ProdutosContext } from '../../ProdutosContext'
import { Container } from "./styles";
import { useProducts } from "../../hooks/useProducts";

    // interface ProdutosTableProps {
    //     createProduct: (formData: FormData) => Promise<void>;
    // }

export function ProdutosTable() {
    const { produtos } = useProducts();

    function deletarProduto(nomeProduto: string) {
        fetch(`http://127.0.0.1:5000/produto?nome=${nomeProduto}`, {
          method: 'DELETE'
        })
        .then(response => {
          console.log(response); // imprime a resposta da API no console
        })
        .catch(error => {
          console.log(error); // trata o erro, se houver
        });

       
      }

   

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Estoque</th>
                        <th>Preço de custo</th>
                        <th>Preço de venda</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>

                {produtos && produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.estoque}</td>
              <td>{produto.preco_custo}</td>
              <td>{produto.preco_venda}</td>
              <td><button onClick={() => deletarProduto(produto.nome)}>
  Deletar Produto
</button></td>
            </tr>
          ))}


                    {/* <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2022</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.500</td>
                        <td>Casa</td>
                        <td>18/04/2022</td>
                    </tr> */}

                </tbody>
            </table>
        </Container>
    )
}