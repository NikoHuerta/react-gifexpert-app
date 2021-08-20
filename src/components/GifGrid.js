// import React, { useState, useEffect } from 'react'

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {
    
    const { data: imgs, loading } = useFetchGifs( category );

    
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>
        { loading && <p className="animate__animated animate__flash">Cargando ...</p> }


        <div className="card-grid">
                { 
                    imgs.map( img  => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />                        
                    ))
                }

        </div>
        </>
    )
}