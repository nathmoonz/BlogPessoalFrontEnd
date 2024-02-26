import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./assets/components/footer/Footer";
import Navbar from "./assets/components/navbar/Navbar";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./assets/components/temas/listaTemas/ListaTemas";
import FormularioTema from "./assets/components/temas/formularioTema/FormularioTema";
import DeletarTema from "./assets/components/temas/deletarTema/DeletarTema";
import ListaPostagens from "./assets/components/postagens/listaPostagens/ListaPostagens";
import FormularioPostagem from "./assets/components/postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./assets/components/postagens/deletarPostagem/DeletarPostagem";

function App() {
  return (
    <>
       <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;
