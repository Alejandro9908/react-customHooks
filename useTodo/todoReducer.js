
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            //throw new Error("action.type = ADD_TODO no está implementada");
            return [ ...state, action.payload ];
        case 'REMOVE_TODO':
            return state.filter( todo => todo.id !== action.payload );
        case 'TOGGLE_TODO':
            return state.map ( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            });
    }

    return state;
}