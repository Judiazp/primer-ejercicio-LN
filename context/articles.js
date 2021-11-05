import { createContext, useContext } from "react";

export const ArticlesContext = createContext()

export function useArticles() {
    return useContext(ArticlesContext)
}