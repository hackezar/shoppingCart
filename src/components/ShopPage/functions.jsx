const fetchAllProducts = async() => {
    const url = 'https://fakestoreapi.com/products'
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Response status: ${resizeBy.status}`);
        }
        const json = await res.json();
        return json;
    } catch (error){
        console.error(error.message);
    }
      
}
export  {fetchAllProducts}