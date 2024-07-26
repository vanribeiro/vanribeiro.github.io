const fetchData = async (url, query, initOption) => {
    const response = await fetch(
                                `${url}${query ? query : ''}`, 
                                initOption ? initOption : {}
                            );
    const result = await response.json();
    return { response, result };        
}

export {
    fetchData,
};