export interface User {
    username: string,
    password: string
}

export interface AuthState {
    isAuth: boolean
    users: User[]
    user: string
    errorText: string
  }

  export interface AppRouterProps  {
    isAuth: boolean
  }
  export interface HeaderProps  {
    isAuth: boolean
    user: string
  }

export interface ContextInterface {
  openModal : boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
} 

export interface IEvent {
  author: string,
  description: string,
  guest: string,
  date: string
} 

export interface EventInterface {
  events : IEvent[]
}

export interface EventCalendarProps {
  events: IEvent[];
}