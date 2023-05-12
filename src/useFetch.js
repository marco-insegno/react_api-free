import { useState, useEffect } from 'react';

const url = 'https://api.publicapis.org/entries';

function useFetch() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(false);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            }).then((data) => {
                setLoading(false);
                setData(data.entries);
            }).catch((error) => {
                setLoading(false);
                setError(true);
            });
    }, [])

    return {loading, error, data}
}

export default useFetch