const fetchData = async (url) => {
    try {
        const reponse = await fetch(url).then(res => res.json());
        return reponse.body; 
    } catch(error) {
        throw new Error(error);
    }
}