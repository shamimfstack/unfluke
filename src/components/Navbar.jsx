import { Link, NavLink } from "react-router-dom";

const navOptions = (
  <>
    <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#0D6EFD]" : "text-[#A5A5A7]"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#0D6EFD]" : "text-[#A5A5A7]"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#0D6EFD]" : "text-[#A5A5A7]"
            }
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#0D6EFD]" : "text-[#A5A5A7]"
            }
          >
            Contact
          </NavLink>
        </li>
  </>
);

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between px-6 py-8">
      <Link to="/">Unfloke</Link>
      <ul className="flex flex-col md:flex-row items-center gap-8">
        { navOptions }
        <li>
          <button className="bg-[#0D6EFD] px-4 py-1 rounded-md text-white">LOG IN</button>
        </li>
      </ul>
    </nav>
  );
}
