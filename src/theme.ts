// theme.ts

// Define the theme types
export type Theme = {
  background: string;
  text: string;
  // Add more theme properties as needed
};

// Light theme
export const lightTheme: Theme = {
  background: "#FFFFFF",
  text: "#333333",
  // Add more properties for the light theme
};

// Dark theme
export const darkTheme: Theme = {
  background: "#222222",
  text: "#FFFFFF",
  // Add more properties for the dark theme
};
