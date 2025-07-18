import './App.css'
import { Modal } from './components'
import { useModalContext } from './components/Modal/Context/ModalContext'


function App() {
  const { setState } = useModalContext()

  const openModal = () => {
    setState(true)
  }

  
  return (
    <>
    <Modal> 
      <h2>hola</h2>
      <h3>que haces</h3>
    </Modal>
    <button onClick={openModal}>Open Modal</button>
    </>
  )
}

export default App
