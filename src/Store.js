import { createStore } from 'redux';

const initialState = {
    user: {
        username: "Vikasini",
        balance: 25000
    }
};


export const creditMoney = (amount) => ({
    type: 'creditMoney',
    payload: amount  
});

export const debitMoney = (amount) => ({
    type: 'debitMoney',
    payload: amount  
});

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'creditMoney':
            return {
                user: {
                    username: state.user.username,
                    balance: state.user.balance + action.payload  
                }
            };
        case 'debitMoney':
            return {
                user: {
                    username: state.user.username,
                    balance: state.user.balance - action.payload  
                }
            };
        default:
            return state;
    }
}

const Store = createStore(reducer);
export default Store;
