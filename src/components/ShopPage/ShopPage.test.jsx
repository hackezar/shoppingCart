import { fetchAllProducts, updateProductCards } from "./functions";
import { describe, it, expect} from "vitest";
import { fireEvent, render, getByText, node, getByRole } from "@testing-library/react";
import ShopPage from "./ShopPage";

describe("Shop Page", () => {
    it("All Products are fetched on initial render", () => {
        const products =  fetchAllProducts()
        expect(Array.isArray(products))
    })


})