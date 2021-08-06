import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    // Para renombrar el destructuring, ": (nuevo nombre)"
    const { data: images, loading } = useFetchGifs(category);    


    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            {/* Si la primera condicion es true, entonces carga la siguiente   */}
            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>
            <GifGridItem images={ images }/>
            
            </div>     
        </>
    )
}
