import { useContext } from "react"
import { DataContext } from "../DataContext/DataProvider"


const useData = () => {
  return useContext(DataContext);
}

export default useData