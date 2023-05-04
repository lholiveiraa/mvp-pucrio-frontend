import { FormEvent, useState, useContext} from 'react';
import Modal from 'react-modal'
// import incomeImg from '../../assets/income.svg'
// import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
// import { ProdutosContext } from '../../ProdutosContext';
import { api } from '../../services/api';
import { useProducts } from '../../hooks/useProducts';


interface NewProductModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}



export function NewProductModal({ isOpen, onRequestClose }: NewProductModalProps) {

    
    const { createProduct } = useProducts();

    const [nome, setNome] = useState('');
    const [estoque, setEstoque] = useState(0);
    const [preco_custo, setPrecoCusto] = useState(0);
    const [preco_venda, setPrecoVenda] = useState(0);

   


        async function handleCreateNewTransaction(event: FormEvent) {
            event.preventDefault();

       

            
            // await createProduct({
            //     nome,
            //     estoque,
            //     preco_custo,
            //     preco_venda
            // })


    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('estoque', String(estoque));
    formData.append('preco_custo', String(preco_custo));
    formData.append('preco_venda', String(preco_venda));
  
    await createProduct(formData);

            setNome('');
            setEstoque(0);
            setPrecoCusto(0)
            setPrecoVenda(0);

            onRequestClose();
            
        }


        // async function handleCreateNewTransaction(event: FormEvent) {
        //     event.preventDefault();
          
        //     const formData = new FormData();
          
        //     formData.append('nome', nome);
        //     formData.append('estoque', estoque.toString());
        //     formData.append('preco_custo', preco_custo.toString());
        //     formData.append('preco_venda', preco_venda.toString());
          
        //     try {
        //       await api.post('/produto', formData, {
        //         headers: {
        //           'Content-Type': 'multipart/form-data',
        //         },
        //       });
          
        //       setNome('');
        //       setEstoque(0);
        //       setPrecoCusto(0);
        //       setPrecoVenda(0);
        //     } catch (err) {
        //       console.log(err);
        //     }
          
        //     onRequestClose();
        //   }

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
            {/* <form onSubmit={handleCreateNewTransaction}> */}
                <h2>Cadastrar produto</h2>
                <label>Nome do produto</label>
                <input
                    placeholder="Nome do produto"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                />

<label>Quantidade em estoque</label>
                <input
                    type="number"
                    placeholder="Estoque"
                    value={estoque}
                    onChange={event => setEstoque(Number(event.target.value))}
                />

<label>Preço de custo</label>
                <input
                    type="number"
                    placeholder="Preço de custo"
                    value={preco_custo}
                    onChange={event => setPrecoCusto(Number(event.target.value))}
                />

<label>Preço de venda</label>
                <input
                    type="number"
                    placeholder="Preço de venda"
                    value={preco_venda}
                    onChange={event => setPrecoVenda(Number(event.target.value))}
                />

                <button type="submit">
                    Cadastrar
                </button>
                {/* </form> */}
            </Container>
        </Modal>
      
    )
}
