import { ActionType } from "./ActionType";
import { StateType } from "./StateType";

export interface CreateContext{
    state: StateType,
    dispatch: React.Dispatch<ActionType>

}