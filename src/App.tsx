import './App.css'
import { AppForm, Button, ColorRed } from './components'
import { GlobalProvider } from './context/global.provider'



function App() {

  const handleClick = () => {
    console.log('Button clicked')
  }
  
  const dimeHola = () => {
    alert('Hola')
  }

  const submit  = ()=> {
    console.log('Form submitted')
  }
  return (
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}><div>boton rojo</div></Button></ColorRed>
      <Button parentMethod={handleClick}> boton normal </Button>
      <AppForm>
        <button type='submit' onClick={submit}>Submit</button>
      </AppForm>
    </GlobalProvider>
  )
}

export default App
