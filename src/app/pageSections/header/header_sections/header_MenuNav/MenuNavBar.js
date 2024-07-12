// header_sections/header_MenuNav/MenuNavBar.js
import MenuNavItemChips from "../../header_components/MenuNavItemChips/MenuNavItemChips";

export default function MenuNavBar() {
  return (
    <div className="flex flex-row">
      <MenuNavItemChips href="#" title="Home" />
      <MenuNavItemChips href="#" title="Experience" />
      <MenuNavItemChips href="#" title="Project" />
      <MenuNavItemChips href="#" title="Certification" />
      <MenuNavItemChips href="#" title="Recognitions & Publications" />
    </div>
  );
}
