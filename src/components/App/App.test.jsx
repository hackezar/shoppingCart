import App from './App'
import { describe, it, expect, getByText} from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';

const AppTest = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

describe("App Component", async() => {
    render(AppTest);
    it("Renders Homepage on initial load", () => {
        expect(screen.getByText("Welcome to the Rearden Digital Shop").toBeInTheDocument);
    })
    it ("Renders Shop Page on shop link click"), async () => {
        const user = userEvent.setup();
        const link = screen.getByRole("Link", {name: 'shopLink'});
        await user.click(link);
        expect(screen.getByRole("div").textContent).toMatch();
    }
    it("Product is expanded when clicked on", () => {
    })
})