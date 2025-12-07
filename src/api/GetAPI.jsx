
export const getMoviesData = async () => {

    try {
        const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`;

        const response = await fetch(API);

        const data = await response.json();
        return data;
        // console.log(data);

    } catch (error) {
        console.error(error);


    }

}