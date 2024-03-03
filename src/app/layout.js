import MainPage from "./MainPage";
import "./globals.css";

export const metadata = {
  title: "Welcome to HParkar`s Portfolio",
  description: "Generated by Next.js",
};

export default function App({ children }) {
  return (
    <html>
      <body>
        <MainPage />;
      </body>
    </html>
  );
}
