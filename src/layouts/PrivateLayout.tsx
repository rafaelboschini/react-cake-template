import React from "react";
import { useTheme } from "@contexts/CustomThemeProvider";
import { Theme } from "../theme"; // Import the theme

type PrivateLayoutProps = {
  children: React.ReactNode;
  theme: Theme;
};

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children, theme }) => {
  const { toggleTheme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <nav>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© {new Date().getFullYear()} rafaelboschini All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivateLayout;
