
export async function getMovieDetails({ params }) {
    //remember the react hooks are not define inside function it is only defined in component but the react router provides
    //the solve issue the define any hook like useParams so this hook are in {params}. 
    console.log(params);

    const id = params.movieID;

    console.log(id);
    try {
        const API = `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`;

        const response = await fetch(API);

        const data = response.json();
        return data;
        // console.log(data);
    } catch (error) {
        console.error(error);


    }

}