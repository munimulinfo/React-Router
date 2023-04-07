import Header from './components/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div>{navigation.state === "loading" ? "akhane spiner add kora jabe" : ""}</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
