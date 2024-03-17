import ContentMainPage from "./pageSections/content/ContentMainPage";
import Footer from "./pageSections/footer/Footer";
import Header from "./pageSections/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <ContentMainPage />
      <Footer />
    </main>
  );
}
