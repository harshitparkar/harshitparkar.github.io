import ContentMainPage from "./pageSections/content/ContentMainPage";
import Footer from "./pageSections/footer/Footer";
import Header from "./pageSections/header/header_sections/main_Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <ContentMainPage />
      <Footer />
    </main>
  );
}
