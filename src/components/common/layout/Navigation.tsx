import { NavLink } from "react-router-dom";

function Navigation() {
  const pages = ["home", "projects", "contact"];

  return (
    <nav className="flex justify-between text-lg font-playfair italic bg-surface text-text">
      {pages.map((page) => (
        <NavLink
          key={page}
          to={page === "home" ? "/" : `/${page}`}
          className={({ isActive }) =>
            [
              "w-full text-center py-2 transition duration-300",
              isActive
                ? "bg-primary text-background"
                : "hover:bg-primary-light hover:text-background",
            ].join(" ")
          }
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
