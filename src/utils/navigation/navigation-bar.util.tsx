import { NavLink, Link } from "react-router-dom";
import { useObservable } from "../hooks/use-observable.hook";
import "./navigation-bar.css";
import { AuthUser } from "../../models/auth/auth-user.auth";
import { authService } from "../../services/auth.service";

export const NavigationBar = () => {
  const authUser = useObservable(authService.authUser$, {} as AuthUser);

  return (
    <ul className="nav nav-pills justify-content-end add mt-3 mb-3">
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/"
        >
          Orders
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/genres"
        >
          Genres
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/customers"
        >
          Customers
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/movies">
          Movies
        </NavLink>
      </li>
      {!authUser?.isLoggedIn && (
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      )}

      <>
        {authUser?.isLoggedIn && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
            <div className="dropdown">
              <Link
                className="btn btn-link dropdown-toggle"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/change-password">
                    Change password
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/edit-profile">
                    Edit profile
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </>
    </ul>
  );
};
