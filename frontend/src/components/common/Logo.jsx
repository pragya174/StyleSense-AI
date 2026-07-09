import { Link } from "react-router-dom";
import { APP } from "../../constants/theme";

function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
    >
      {APP.name}
    </Link>
  );
}

export default Logo;