import { IEvent } from "../types/types"
import { getStateFromLS } from "./getStateFromLS"

export const getEventsFromLs = () =>{
    const {user} = getStateFromLS()
    const json = localStorage.getItem('events')  
    let eventsArray = []
    if(json){
        const currentArray = JSON.parse(json)
        eventsArray = currentArray.filter((item:IEvent) => item.author === user || item.guest === user)
    }    
    return eventsArray
}