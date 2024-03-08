import ContentMainPage from "./pageSections/content/ContentMainPage";
import Footer from "./pageSections/footer/Footer";
import Header from "./pageSections/header/Header";

export default function MainPage() {
  return (
    <div>
      <Header />
      <ContentMainPage />
      <Footer />
    </div>
  );
}
