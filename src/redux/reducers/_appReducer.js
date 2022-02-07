const intialState = {
    user:null,
    orders:null
}

function AppReducer(state=intialState,action){
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }

            case 'SET_ORDERS':
                return {
                    ...state,
                    orders:action.orders
                }

                case 'ADD_ORDER':
            return {
                ...state,
                orders:[...state.orders,action.order]
            }
        default:
            return state
    }
}

export default AppReducer;