import Image from "next/image";
import Link from "next/link";

const thumbnails = [
  "MH01 ORO Rosa Anallergico + CL.png",
  "MH02 ORO Rosa 5N Anallergico+ CL.png",
  "MH03 ORO Rosa 5N Vibrato Anallergico + CL.png",
  "MH04 ORO Rosa 5N Matt Anallergico+ CS.png",
  "MH05 ORO Ambra Vibrato Nichel Free + CL.png",
  "MH06 ORO Ambra 1000 + CL.png",
  "MH07 ORO 8698 Nichel Free + CL.png",
  "MH08 ORO 8670_3N Vibrato _Brass_ + CL (smart).png",
  "MH09 ORO Ambra 1000 Anallergico + CL + VTO.png",
  "MH10 ORO 8670_05 Invecchiato Nichel Free Ciclo Catena Pelletteria.png",
  "MH11 ORO 8618 Anallergico + CL.png",
  "MH12 ORO 8670 Anallergico + CL.png",
  "MH13 ORO W930_8698N1 Vibrato Anallergico + CL.png",
  "MH14 ORO W930_8698N1 Vibrato Anallergico + CL + VTO.png",
  "MH15 ORO 8670 Opaco Anallergico + CL.png",
  "MH16 ORO 8698 Anallergico + CL.png",
  "MH17 ORO 8670_3N Invecchiato_77_ + CL (smart).png",
  "MH18 ORO 8693_2N_Matt_Rocks_ + CL (smart).png",
  "MH19 ORO 8618 Matt Anallergico + CS.png",
  "MH20 ORO 8670_3N Invecchiato_7794_ + CS (smart).png",
  "MH21 ORO INDIO 8710 INVECCHIATO Anallergico CL .png",
  "MH22 ORO Indio 8710 Anallergico + CL.png",
  "MH23 ORO 8953 Muse Brass Anallergico + CL.png",
  "MH24 ORO 8953 Muse Brass Anallergico + CL + VTO.png",
  "MH25 OTTONE INVECCHIATO +VTS.png",
  "MH26 ORO Shy Anallergico + CL.png",
  "MH27 ORO Chiaro 8651 (M1) Anallergico + CL.png",
  "MH28 OTTONE + VTL.png",
  "MH29 OTTONE + VTO.png",
  "MH30 OTTONE simulato invecchiato + CO.png",
  "MH31 ORO Chiaro 8651 Anallergico + CL.png",
  "MH32 ORO Chiaro 8651 NR2 Anallergico + CL.png",
  "MH33 ORO Chiaro 8651 Vibrato Anallergico + CL.png",
  "MH34 ORO Chiaro 8651 Matt Anallergico + CS.png",
  "MH35 ARGENTO Antico Anallergico + CL.png",
  "MH36 ARGENTO Nichel Free + CL.png",
  "MH37 ARGENTO Nichel Free + CL + VTO.png",
  "MH38 PALLADIO Nikel 1811 Vibrato Anallergico + CL.png",
  "MH39 PALLADIO Matt Anallergico + CS.png",
  "MH40 PALLADIO Black Nichel Free Ciclo Catena Pelletteria + CL.png",
  "MH41 RUTENIO White 601 Anallergico + CL.png",
  "MH42 PALLADIO Nikel 1811 Anallergico + CL.png",
  "MH43 PALLADIO Black Nichel Free + CL.png",
  "MH44 RUTENIO Ultablack 640 Matt Anallergico + CS.png",
  "MH45 ARGENTO Invecchiato Nichel Free + CS.png",
  "MH46 RUTENIO Ultablack 640 Anallergico + CL.png",
  "MH47 RUTENIO Fume 620 Anallergico + CL.png",
  "MH48 RUTENIO Ultablack 640 Vibrato Anallergico + CL.png",
  "MH49 RUTENIO Dark + CO.png",
  "MH50 NERO CL.png",
  "MH51 nero lucido.png",
  "MH52 nero opaco.png",
  "MH53 nero semilucido.png",
  "MH54 nero gommato opaco.png",
  "MH55 nero gommato lucido.png",
  "MH56 nero metallizzato lucido.png",
  "MH57 nero effetto pelle.png",
  "MH58 hologram lucido su base nera.png",
  "MH59 nero velato lucido.png",
  "MH60 nero velato opaco.png",
  "MH61 rosso velato lucido.png",
  "MH62 rosso velato opaco.png",
  "MH63 rosso ceramicato lucido.png",
  "MH64 rosso metallizzato lucido.png",
  "MH65 rosso diamantato.png",
  "MH66 gocciolato nero su base rosso opaca.png",
  "MH67 rosso microsfere opaco.png",
  "MH68 hologram lucido su base rossa.png",
  "MH69 nero sfumato rosso.png",
  "MH70 gocciolato rosso.png",
  "MH71 velato multicolor lucido.png",
  "MH72 velato multicolor opaco.png",
  "MH73 grigio antracite diamantato.png",
  "MH74 giallo fluo lucido.png",
  "MH75 verde fluo opaco.png",
  "MH76 magenta fluo opaco.png",
  "MH77 blu fluo lucido.png",
  "MH78 glitterato argento lucido.png",
  "MH79 glitterato oro lucido.png",
  "MH80 glitterato rosso lucido.png",
  "MH81 oro metallizzato semilucido.png",
  "MH82 argento metallizzato semilucido.png",
  "MH83 perla classica.png",
  "MH84 perla champagne.png",
  "MH85 perla iride lucido.png",
  "MH86 perla oro.png",
  "MH87 perla blu.png",
  "MH88 cangiante viola-verde lucido.png",
  "MH89 cosmos viola-blu.png",
  "MH90 cosmos magenta-gold.png"
];

export default function Catalog() {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", padding: "40px" }}>
      {/* LOGO */}
      <div style={{ position: "absolute", top: 0, left: 80, zIndex: 2 }}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={160}
          style={{ objectFit: "contain" }}
        />
      </div>

      <h1 style={{
        color: "white",
        textAlign: "center",
        fontSize: "50px",
        fontWeight: 600,
        marginBottom: "40px",
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "1px"
      }}>
        Coating Collection
      </h1>

      {/* WRAPPER per scroll orizzontale su schermi piccoli */}
      <div style={{ overflowX: "auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 colonne fisse
          gap: "32px",
          minWidth: "1200px", // forza lo scroll orizzontale su mobile
          margin: "0 auto"
        }}>
          {thumbnails.map((fileName) => {
            const encodedFile = encodeURIComponent(fileName);
            const id = fileName.slice(0, 4); // Primi 4 caratteri

            return (
              <Link key={id} href={`/sample/${id}`}>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 0 12px rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "scale(1.03)";
                    el.style.boxShadow = "0 0 30px rgba(255,255,255,0.15)";
                    el.style.border = "1px solid rgba(255,255,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "scale(1)";
                    el.style.boxShadow = "0 0 12px rgba(255,255,255,0.05)";
                    el.style.border = "1px solid rgba(255,255,255,0.15)";
                  }}
                >
                  <img
                    src={`/miniatures/${encodedFile}`}
                    alt={fileName}
                    style={{
                      width: "90%",
                      borderRadius: "12px",
                      display: "block",
                    }}
                  />
                  <div style={{
                    marginTop: "12px",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 300,
                    letterSpacing: "0.5px",
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {id}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

