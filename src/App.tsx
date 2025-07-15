import './App.css'
import { AppForm, Button, ColorRed } from './components'


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
    <>
      <ColorRed><Button parentMethod={dimeHola}><div>boton rojo</div></Button></ColorRed>
      <Button parentMethod={handleClick}> boton normal </Button>
      <AppForm>
        <button type='submit' onClick={submit}>Submit</button>
      </AppForm>
    </>
  )
}

export default App
