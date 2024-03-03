import ThemeSwitcher from "./ThemeSwitcher";
import Footer from "./pageSections/footer/Footer";
import Header from "./pageSections/header/Header";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
