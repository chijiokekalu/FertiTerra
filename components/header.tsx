import { Link } from "react-router-dom"

export function Header() {
  const navigationItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Learn",
      href: "/learn",
    },
    {
      name: "Knowledge Centre",
      href: "/knowledge-centre",
    },
    {
      name: "Community",
      href: "/community",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header>
      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
</merged_code>
