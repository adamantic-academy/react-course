import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/"> Homepage </Link>
      <Link to="/users"> Users </Link>
    </div>
  );
};
