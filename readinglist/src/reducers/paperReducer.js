import { v4 as uuid } from 'uuid';
export const paperReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PAPER':
            return [...state, {
                title: action.paper.title,
                author: action.paper.author,
                id: uuid()
            }]
        case 'REMOVE_PAPER':
            return state.filter(paper => paper.id !==action.id)
        default:
            return state
    }
}