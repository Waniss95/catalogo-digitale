import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* 🎥 Video di sfondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/video/intro.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>

      {/* 🖼 Logo in alto */}
      <div style={{ position: "absolute", top: 0, left: 80, zIndex: 2 }}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={160}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* 🔘 Pulsante centrato */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <Link href="/catalog">
          <button
            style={{
              padding: "24px 60px",
              fontSize: "40px",
              color: "white",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.7)",
              borderRadius: "30px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.25)";
              el.style.boxShadow = "0 0 50px rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(255,255,255,0.1)";
              el.style.boxShadow = "none";
            }}
          >
            Esplora
          </button>
        </Link>
      </div>
    </div>
  );
}
