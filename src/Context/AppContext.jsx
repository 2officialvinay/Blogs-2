import { createContext, useState } from "react";
import { baseUrl } from "../baseurl"

export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogsData(page = 1, tag = null, category){
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        
        catch(error){
            console.log("Error occurred in fetching the api url.");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogsData(page);
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogsData,
        handlePageChange
    };

    return (
        <AppContext.Provider value = {value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider