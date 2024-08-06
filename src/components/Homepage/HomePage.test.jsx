import { describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage"

describe("Homepage Component", () => {
    it("Renders navbar", () => {
        render(<Homepage/>);
    })
})