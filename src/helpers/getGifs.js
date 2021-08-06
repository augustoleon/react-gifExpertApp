

export const getGifs = async( category ) => {

    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Y5gZ5le6c4Y9qjDd711Sn8aH3dd3HK6b&q=${ encodeURI(category) }&limit=10`
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}