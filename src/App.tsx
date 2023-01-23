import TextArea from "./components/TextArea"
import DataProvider from "./DataContext/DataProvider"


const App = () => {
  return (
    <DataProvider>
    <main>
      
        <TextArea/>
      
    </main>
    </DataProvider>
  )
}

export default App