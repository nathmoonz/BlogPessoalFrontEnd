import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

function Footer() {
  const { usuario, handleLogout } = useContext(AuthContext);

  let footerComponent;

  let data = new Date().getFullYear();

  if (usuario.token !== "") {
    footerComponent = (
      <>
        <div className="flex justify-center bg-rose-400 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">
              Blog Pessoal Genaration | &copy;
            </p>
            <p className="text-lg">Acesse nossas redes sociais</p>
            <div className="flex">
              <LinkedinLogo size={32} weight="bold" />
              <InstagramLogo size={32} weight="bold" />
              <FacebookLogo size={32} weight="bold" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
