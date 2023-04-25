import { useState } from "react"
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { banco } from './firebaseConnection'
import Header from './components/Header'
import Footer from './components/Footer'
import './app.css'

function App() {

  const [ titulo, setTitulo ] = useState('')
  const [ descricao, setDescricao ] = useState('')

  async function adicionar() {
    await addDoc(collection(banco, 'tarefa'), {
      titulo: titulo,
      descricao: descricao
    }).then(() => {
      console.log('Tarefa adicionada com sucesso!')
      toast.success('Tarefa adicionada com sucesso!')
      setTitulo('')
      setDescricao('')
    }).catch((err) => {
      console.log('Tarefa não adicionada... Erro: ' + err)
      toast.err('Tarefa não adicionada...')
    })

  }

  return (
    <>
      <Header />
      <div className="app">
        <div className="formulario">
          <label>Título</label>
          <input 
            placeholder="Titulo da tarefa..."
            value={titulo}
            onChange={ (eve) => setTitulo(eve.target.value)}
          />
          <br />
          <label>Descrição</label>
          <textarea
            placeholder="Detalhes sobre a tarefa..."
            value={descricao}
            onChange={ (eve) => setDescricao(eve.target.value)}/>
          <button onClick={adicionar}>Adicionar</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
