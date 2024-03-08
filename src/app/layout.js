import MainPage from "./MainPage";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Welcome to HParkar`s Portfolio",
  description: "Generated by Next.js",
};

export default function App({ children }) {
  return (
    <html>
      <body>
        <Provider>
          <MainPage />
        </Provider>
      </body>
    </html>
  );
}
