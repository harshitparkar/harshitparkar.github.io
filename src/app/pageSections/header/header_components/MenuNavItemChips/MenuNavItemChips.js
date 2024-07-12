// header_components\MenuNavItemChips\MenuNavItemChips.js
import Link from "next/link";
import internalStyles from "./MenuNavItemChips.module.css";

export default function MenuNavItemChips({ href, title }) {
  return (
    <div className={`${internalStyles.navBarItem}`}>
      <Link href={href} className={`${internalStyles.navLink}`}>
        {title}
      </Link>
    </div>
  );
}
