import { createContext, useReducer } from "react"
import { ActionType } from "../Interfaces/ActionType"
import { ChildrenNodeProps } from "../Interfaces/ChildrenNodeProps"
import { CreateContext } from "../Interfaces/CreateContext"
import { StateType } from "../Interfaces/StateType"


const initialState={
    text: "",
    seperator: ",",
    sort: false
}
const reducer=(state: StateType,action: ActionType)=>{
  switch(action.type){
    case "fillText":
       return {
        ...state,
        text: action.payload?action.payload:""
       }
      
    case "reset":
        return initialState;
       
    case "sort":
        return{
            ...state,
             sort: action.payload==="true"?true:false
        }
    case "seperator":
        return {
            ...state,
              seperator: action.payload? action.payload:""
        }
        case "extract":
           const text=state.text;
           const regex=/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/g;
           let rmatch;
           if(text){
            rmatch=text.match(regex);
             if(rmatch===null){
                return {
                    ...state,
                     text: "No match found !"
                }

             }
             else{
                if(state.seperator===","){
                    return {
                        ...state,
                         text: state.sort? rmatch.sort().join(","):rmatch.join(",")
                    }
                }else if(state.seperator==="n"){
                    return{
                      ...state,
                      text: state.sort? rmatch.sort().join("\n"):rmatch.join("\n")
                    }
                    
                }else if(state.seperator==="s"){
                    return{
                        ...state,
                        text: state.sort? rmatch.sort().join(";"):rmatch.join(";")
                      }
                }
             }
            
           }
           return state
           
       default:
         return state;
        
      
  }
}



export const DataContext=createContext<CreateContext>({} as CreateContext);

const DataProvider = ({children}: ChildrenNodeProps) => {
    const [state, dispatch]=useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{state,dispatch}}>
       {children}
    </DataContext.Provider>
  )
}

export default DataProvider