
export const getArticles = async (route) => {
    
    const response = await fetch(route)
    const data = await response.json()

    try {
        return data
    } catch (error) {
        return error;
    }
}

