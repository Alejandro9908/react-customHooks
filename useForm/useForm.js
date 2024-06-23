import {useState} from "react";

export const useForm = (initialValue = {}) => {

    const [ formState, setFormState ] = useState(initialValue);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    }

    const onResetChange = () => {
        setFormState(initialValue);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetChange,
    };

}