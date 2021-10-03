import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts( category );

    return (
        <>
            <h3> {category} </h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>
                {
                    images.map((img) => {
                        return <GiftGridItem key={img.id} {...img} />
                    })
                }
            </div>

        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
};