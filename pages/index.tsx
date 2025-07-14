import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Head>
        <title>Coating Collection</title>
      </Head>

      {/* Sfondo video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Il tuo browser non supporta i video HTML5.
      </video>

      {/* Logo */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={160}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Bottone Discover */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <button
          style={{
            padding: "18px 36px",
            fontSize: "20px",
            color: "white",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            fontFamily: "'Montserrat', sans-serif",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = "scale(1.05)";
            el.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.3)";
            el.style.border = "1px solid rgba(255, 255, 255, 0.6)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = "scale(1)";
            el.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.1)";
            el.style.border = "1px solid rgba(255, 255, 255, 0.3)";
          }}
          onClick={() => router.push("/catalog")}
        >
          DISCOVER
        </button>
      </div>
    </div>
  );
}
