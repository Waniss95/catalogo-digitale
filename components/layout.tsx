import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "black" }}>
      {/* Logo in alto */}
      <div style={{ position: "absolute", top: 40, left: 40, zIndex: 10 }}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={80}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Contenuto della pagina */}
      <div style={{ paddingTop: "100px" }}>{children}</div>
    </div>
  );
}
