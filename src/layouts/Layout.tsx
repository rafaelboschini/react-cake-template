import React from "react";
import { Theme } from "../theme";

type PrivateLayoutProps = {
  children: React.ReactNode;
  theme: Theme; // Pass the theme as a prop
};

const Layout: React.FC<PrivateLayoutProps> = ({ children, theme }) => {
  return (
    <div style={{ background: theme.background, color: theme.text }}>
      {children}
    </div>
  );
};

export default Layout;
