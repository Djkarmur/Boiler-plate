export const LoaderReducer = (state= false,action)=>{
    switch (action.type) {
        case 'LOADER':
            return action.payload
            
    
        default:
          return state
    }
}