import App from './App'
import {describe, it, expect, beforeEach} from 'vitest'
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event';

describe("App Component", () => {
    // Render the app before each test
    beforeEach(() => {render(
        <BrowserRouter>
            <App />
        </BrowserRouter>)
    })

    it("Renders App Component", () => {
        expect(screen.getByRole("link", {name: 'Home'}).textContent).toMatch('Home');
    });

    it("Renders ShopPage on Shop Link Click", async() => {
        const user = userEvent.setup();
        const shopLink = screen.getByRole('link', {name: 'Shop', hidden: true});
        
        await user.click(shopLink);

        expect(screen.getByRole('heading').textContent).toMatch('All Products');
    })

    it ('Product is expanded when clicked on', async () => {
        const user = userEvent.setup();
        const shopLink = screen.getByRole('link', {name: 'Shop', hidden: true});
        
        await user.click(shopLink);

        const product = screen.getByText('Mens Cotton Jacket')
        await user.click(product)

        expect(screen.getByRole('heading').textContent).toMatch('Mens Cotton Jacket');


    })
})