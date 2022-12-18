import Image from "next/image";
import * as Style from "./style";

export default function Partners() {
  return (
    <Style.Conteiner>
      <Style.Imagem style={{left:"10%"}}>
        <Image
          src="/Images/walyson3.png"
          alt="Ricardo"
          width={150}
          height={150}
          className="img"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Style.Imagem>
      <Style.Imagem>
        <Image
          src="/Images/walyson3.png"
          alt="Walyson"
          width={150}
          height={150}
          className="img"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Style.Imagem>
      <Style.Imagem style={{right:"10%"}}>
        <Image
          src="/Images/walyson3.png"
          alt="Cayo"
          width={150}
          height={150}
          className="img"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Style.Imagem>
    </Style.Conteiner>
  );
}
