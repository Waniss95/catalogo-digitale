import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.container}>
      {/* Sfondo video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
        src="/video/intro.mp4"
      />

      {/* Overlay trasparente + contenuti */}
      <div style={styles.overlay}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          style={styles.logo}
        />

        <Link href="/catalog">
          <button
            style={{
              ...styles.button,
              transform: hover ? "scale(1.05)" : "scale(1)",
              boxShadow: hover
                ? "0 0 25px rgba(255, 255, 255, 0.3)"
                : "0 0 10px rgba(255, 255, 255, 0.1)",
              border: hover
                ? "1px solid rgba(255, 255, 255, 0.6)"
                : "1px solid rgba(255,255,255,0.3)",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            DISCOVER
          </button>
        </Link>

        {/* Spacer per posizionare in basso il tasto MORE INFO */}
        <div style={{ flexGrow: 1 }} />

        {/* Nuovo bottone MORE INFO */}
        <a
          href="/docs/info.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              ...styles.button,
              padding: "10px 24px",
              fontSize: "14px",
              opacity: 0.8,
              marginBottom: "30px",
            }}
          >
            MORE INFO
          </button>
        </a>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    boxSizing: "border-box",
    textAlign: "center",
  },
  logo: {
    maxWidth: "80%",
    height: "auto",
    marginBottom: "40px",
  },
  button: {
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: "15px 30px",
    fontSize: "18px",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "12px",
    backdropFilter: "blur(8px)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
  },
};
