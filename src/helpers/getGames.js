
export const getGames = async(orderby='release-date') => {
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '4ae26ebe3fmsh7206b47dd59abecp18a83cjsn5c86e12183de'
        }
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${orderby}`;
    const resp = await  fetch(url, options)
    const data = await resp.json();
    const games = data.map(gm =>{
        return{
            id: gm.id,
            title: gm.title,
            url : gm.thumbnail,
            desc: gm.short_description,
            category:gm.genre,
            platform: gm.platform,
        }
    });
    return (games);

}
