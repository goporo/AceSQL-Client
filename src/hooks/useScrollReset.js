import { useEffect, useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';

const useScrollReset = () => {

    const { pathName } = useLocation();

    useLayoutEffect(() => {

        // reset scroll manually
        window.scrollTo(0, 0);
        console.log(pathName);
    }, [pathName])
}

export default useScrollReset