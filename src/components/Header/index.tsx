import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import chacaraLogo from "../../assets/recanto-logo-preto.png";
// import { ArrowCircleLeft } from "@phosphor-icons/react";

export function Header() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // function previousLocation() {
  //   navigate(-1);
  // }

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={chacaraLogo} alt="Flor de Lotus logo" id="chacaraLogo-footer" />
      </Link>
      <div className="nav-btn">
        {/* {
          location.pathname !== "/" ? (
            <div className="previous-btn" onClick={() => previousLocation()}>
              <ArrowCircleLeft size={28} />
            </div>
          ) : (
            <></>
          )
        } */}
        {/* {
          location.pathname === "/" ? (
            <Link to="/taxes">
              <Info size={26} />
            </Link>
          ) : location.pathname === "/taxes" ? (
            <Link to="/">
              <House size={26} />
            </Link>
          ) : (
            <div className="previous-btn" onClick={() => previousLocation()}>
              <ArrowCircleLeft size={28} />
            </div>
          )
        } */}
      </div>

    </HeaderContainer>
  )
}