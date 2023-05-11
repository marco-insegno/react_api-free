import { useState, useEffect } from 'react';

const url = 'https://api.publicapis.org/entries'

function useFetch() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {

        setLoading(true)
        setError(false)

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            }).then(function (data) {
                setLoading(false)
                setData(data.entries)

            }).catch(function (error) {
                setLoading(false)
                setError(true)

            });

    }, [])


    return { loading, error, data, count}
}

export default useFetch