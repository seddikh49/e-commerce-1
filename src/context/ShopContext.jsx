import { createContext,useState } from "react";
import products from '../‏‏assets/frontend_assets/assets.js'

export const ShopContext = createContext()
const currency = "$"
const delivery_fee = 10

const ShopContextProvider = ({ children }) =>{
 
    const value = {
        products,
        currency,
        delivery_fee,
    
    }

    return (
        <ShopContext.Provider value={value}>
          {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider