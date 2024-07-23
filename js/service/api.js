const fetchData = async (url, query) => {
    const response = await fetch(`${url}${query ? query : ''}`);
    const result = await response.json();
    return { response, result };        
}

export {
    fetchData,
};