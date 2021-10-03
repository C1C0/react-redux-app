import { Dispatch } from "redux"
import { Action, IndexActionType } from "."

export const depositMoney = (amount: number) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: IndexActionType.DEPOSIT,
            payload: amount,
        })
    }
}
export const withdrawMoney = (amount: number) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: IndexActionType.WITHDRAW,
            payload: amount,
        })
    }
}
export const bankrupt = () => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: IndexActionType.BANKRUPT,
        })
    }
}