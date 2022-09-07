import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    // Fragment is the equivalent to template in Vue (is not rendered in the DOM)
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Store
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
