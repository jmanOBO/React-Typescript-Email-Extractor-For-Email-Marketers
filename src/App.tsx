import TextArea from "./components/TextArea"
import DataProvider from "./DataContext/DataProvider"


const App = () => {
  return (
    <DataProvider>
    <main>
      <div className="container">
        <TextArea/>
      </div>
    </main>
    </DataProvider>
  )
}

export default App