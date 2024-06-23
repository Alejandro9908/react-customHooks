import {useEffect, useState} from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: false,
        errorMsg: null,
    });

    useEffect(() => {
        getFetchData();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            error: false,
            errorMsg: null,
        })
    }

    const getFetchData = async () => {
        setLoadingState();

        const response = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                error: true,
                errorMsg: {
                    code: response.status,
                    message: response.statusText,
                },
            })
            return;
        }

        const data = await response.json();

        setState({
            data: data,
            isLoading: false,
            error: false,
            errorMsg: null,
        });

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
    }
}