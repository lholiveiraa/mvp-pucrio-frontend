import  { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface Produto {
    id: number;
    nome: string;
    estoque: number;
    preco_custo: number;
    preco_venda: number,
}

// interface ProdutoInput {
//     nome: string;
//     estoque: number;
//     preco_custo: number;
//     preco_venda: number,
// }

interface ProdutosProviderProps {
    children: ReactNode;
}

interface ProdutosContextData {
    produtos: Produto[];
    createProduct: (formData: FormData) => Promise<void>;
}

export const ProdutosContext = createContext<ProdutosContextData>(
    {} as ProdutosContextData
);

export function ProdutosProvider({ children }: ProdutosProviderProps) {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        api.get('produtos')
        .then(response => setProdutos(response.data.produtos))
    }, []);

    useEffect(() => {
        atualizarTabela(); // busca os dados da tabela ao carregar o componente
      }, []);
      
      function atualizarTabela() {
        fetch('http://127.0.0.1/produto')
          .then(response => response.json())
          .then(data => {
            setProdutos(data); // atualiza o estado com os novos dados da tabela
          })
          .catch(error => {
            console.log(error); // trata o erro, se houver
          });
      }

    async function createProduct(formData: FormData){
       const response = await api.post('/produto', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
       });

    //    const { produto } = response.data;

    //    setProdutos([
    //     ...produtos,
    //     produto
    //    ]);

    const { updatedProducts } = response.data;

    setProdutos([
      ...produtos,
      updatedProducts,
    ]);


    }

    return (
        <ProdutosContext.Provider value={{produtos, createProduct}}>
            { children }
        </ProdutosContext.Provider>
    )
}

export function useProducts() {
    const context = useContext(ProdutosContext);

    return context;
}