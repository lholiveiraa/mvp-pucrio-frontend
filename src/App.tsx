import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import Modal from 'react-modal'
import { NewProductModal } from "./components/NewProductModal";
import { ProdutosProvider } from "./hooks/useProducts";

Modal.setAppElement('#root');

export function App() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }
  return (
    <ProdutosProvider>
      <Header onOpenNewProductsModal={handleOpenNewProductModal} />

      <Dashboard />

      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
      />

      <GlobalStyle />
      </ProdutosProvider>

  );
}


