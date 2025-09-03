import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import '../styles.css'

const RootLayout = () => (
  <>
    <div className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({
  component: RootLayout,
})
