import ContentMainPage from "./pageSections/content/ContentMainPage";
import Footer from "./pageSections/footer/Footer";
import Header from "./pageSections/header/header_sections/main_Header/Header";
import CustomCursor from "./universal_Components/CustomCursor/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor>
        <Header />
        <ContentMainPage />
        <Footer />
      </CustomCursor>
    </main>
  );
}
