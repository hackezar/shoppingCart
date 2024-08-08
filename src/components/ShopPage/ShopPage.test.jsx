import { fetchAllProducts, updateProductCards } from "./functions";
import { describe, it, expect} from "vitest";



describe("Shop Page", () => {
    it("All Products are fetched on initial render", () => {
        const products =  fetchAllProducts()
        expect(Array.isArray(products))
    })
})