import {useEffect} from 'react';

const useTitle = (title) =>{

    useEffect(()=> {

        document.title = `Api_Free - ${title}`;

    },[title])

}

export default useTitle