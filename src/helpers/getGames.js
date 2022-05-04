
export const getGames = async({search = '',plataform= '',category= '',orderby= ''}) => {
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '4ae26ebe3fmsh7206b47dd59abecp18a83cjsn5c86e12183de'
        }
    };
    const resp = await  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?&limit=10', options)
    const data = await resp.json();
    const games = data.map(gm =>{
        return{
            id: gm.id,
            title: gm.title,
            url : gm.thumbnail,
            desc: gm.short_description
        }
    });
    return (games);

}
