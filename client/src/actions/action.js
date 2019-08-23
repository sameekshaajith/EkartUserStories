

export const putData = (data) => {
    return {
        type: 'UPDATE-PRODUCTS',
        payload: data
    }
}

export const selectedProduct = (item) => {
    return {
        type: 'UPDATE-SELECTED-PRODUCT',
        payload: item
    }
}

export const logger = (person) => {
    return {
        type: 'LOGGED IN',
        payload: person
    }
}
