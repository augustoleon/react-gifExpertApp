import React from 'react'

export const GifGridItem = ({images}) => {

    
    return (
        <>  
            
            {
                images.map( ({id, title, url}) => (
                    <div className='card animate__animated animate__fadeIn' key={ id }> 
                        <img src={ url } alt={title}/>
                        <p> { title } </p>
                        
                    </div>
                ))
            }
        
        </>
    )
}
