
const initState = () => {
   let bool = localStorage.getItem('signedIn');
   let person = bool? JSON.parse(localStorage.getItem('personSigned')) : {};
   return { prdArray: [],
    productChosen: '',
    signedIn: bool,
    personSigned: person }
}
const reducer = (state=initState(), action) => {
    switch(action.type){
        case 'UPDATE-PRODUCTS':{
            return {
                ...state, 
                prdArray: [...action.payload]
            }
        }
        case 'UPDATE-SELECTED-PRODUCT':{
            return {
                ...state,
                productChosen: action.payload
            }
        }
        case 'LOGGED IN': {
            return {
                ...state,
                personSigned: action.payload,
                signedIn: true
            }
        }
        default: {
            return state;
        }
    }
    
}
export default reducer;