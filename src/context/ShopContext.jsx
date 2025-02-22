import { createContext, useState } from "react";
import products from '../‏‏assets/frontend_assets/assets.js'

export const ShopContext = createContext()



const ShopContextProvider = ({ children }) => {
    const currency = "$"
    const delivery_fee = 10
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [searchBar, setSearchBar] = useState(false);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        searchBar,
        setSearchBar

    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider