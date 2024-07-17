import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex gap-10">
      <Link to="/signIn">
      <button className="btn btn-outline btn-accent">SignIn</button>
      </Link>
      <Link to="/signUp">
      <button className="btn btn-outline btn-secondary">SignUp</button>
      </Link>
    </div>
  );
};

export default Navbar;