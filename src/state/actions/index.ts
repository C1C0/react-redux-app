export enum IndexActionType{
    DEPOSIT = "[DEPOSIT] Deposit",
    WITHDRAW = "[WITHDRAW] Withdraw",
    BANKRUPT = "[BANKRUPT] Bankrupt",
}

interface DepositAction {
  type: IndexActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: IndexActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: IndexActionType.BANKRUPT;
}

export type Action = DepositAction | WithdrawAction | BankruptAction;
