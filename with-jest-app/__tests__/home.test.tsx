/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "@/pages/home/index";

describe("Home Page", () => {
  it("renders the page title", () => {
    render(<Home />);
    
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    
    const description = screen.getByText(/get started by editing/i);
    
    expect(description).toBeInTheDocument();
  });

  it("renders all navigation cards", () => {
    render(<Home />);
    
    const documentationCard = screen.getByRole("heading", { name: /documentation/i });
    const learnCard = screen.getByRole("heading", { name: /learn/i });
    const examplesCard = screen.getByRole("heading", { name: /examples/i });
    const deployCard = screen.getByRole("heading", { name: /deploy/i });
    
    expect(documentationCard).toBeInTheDocument();
    expect(learnCard).toBeInTheDocument();
    expect(examplesCard).toBeInTheDocument();
    expect(deployCard).toBeInTheDocument();
  });

  it("has correct links for navigation cards", () => {
    render(<Home />);
    
    const links = screen.getAllByRole("link");
    const documentationLink = links.find(link => link.getAttribute("href") === "https://nextjs.org/docs");
    const learnLink = links.find(link => link.getAttribute("href") === "https://nextjs.org/learn");
    const examplesLink = links.find(link => link.getAttribute("href") === "https://github.com/vercel/next.js/tree/canary/examples");
    const deployLink = links.find(link => link.getAttribute("href") === "https://vercel.com/new");
    
    expect(documentationLink).toBeInTheDocument();
    expect(learnLink).toBeInTheDocument();
    expect(examplesLink).toBeInTheDocument();
    expect(deployLink).toBeInTheDocument();
  });

  it("renders the footer with Vercel link", () => {
    render(<Home />);
    
    const vercelLink = screen.getByText(/powered by/i).closest("a");
    
    expect(vercelLink).toBeInTheDocument();
    expect(vercelLink).toHaveAttribute("href", expect.stringContaining("vercel.com"));
    expect(vercelLink).toHaveAttribute("target", "_blank");
    expect(vercelLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the Vercel logo image", () => {
    render(<Home />);
    
    const vercelLogo = screen.getByAltText("Vercel Logo");
    
    expect(vercelLogo).toBeInTheDocument();
  });

  it("renders the page with proper structure", () => {
    render(<Home />);
    
    // Check for main content structure
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    
    // Check for footer
    const footer = document.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});