import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts';

export const useFetchGifts = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        setTimeout(() => {
            getGifts(category)
                .then(imgs => setstate({
                    data: imgs,
                    loading: false
                }))
        }, 500)

    }, [category]);


    return state;
}