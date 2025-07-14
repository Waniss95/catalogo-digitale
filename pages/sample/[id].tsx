import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { samplesData } from "../../components/samplesData";
import { useEffect, useState } from "react";

const ModelViewer = dynamic(() => import("../../components/ModelViewer"), {
  ssr: false,
}) as React.FC<{ url: string }>;

export default function SamplePage() {
  const router = useRouter();
  const { id } = router.query;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // inizializza
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!id || typeof id !== "string") return null;

  const data = samplesData[id as keyof typeof samplesData];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {/* Modello 3D */}
      <div
        style={{
          flex: 1,
          height: isMobile ? "60vh" : "100vh",
        }}
      >
        <Canvas camera={{ position: [0, 0, 30] }}>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={true}
            autoRotate
            autoRotateSpeed={0.5}
            minDistance={3}
            maxDistance={50}
          />
          <ModelViewer url={`/models/${id}.glb`} />
        </Canvas>
      </div>

      {/* Info tecniche */}
      <div
        style={{
          width: isMobile ? "100%" : "30%",
          padding: isMobile ? "24px" : "40px",
          borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "#111",
          overflowY: "auto",
        }}
      >
        {data ? (
          <>
            <h2
              style={{
                fontSize: isMobile ? "24px" : "36px",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              {data.nome}
            </h2>
            <p
              style={{
                fontSize: isMobile ? "16px" : "20px",
                color: "#ccc",
                lineHeight: "1.6",
                marginBottom: "10px",
              }}
            >
              <strong>CODICE:</strong> {data.codice}
              <br />
              <strong>CATEGORIA:</strong> {data.categoria}
              <br />
              <strong>ASPETTO:</strong> {data.aspetto}
              <br />
              <strong>APPLICAZIONE:</strong> {data.applicazione}
              <br />
              <strong>MATERIALE:</strong> {data.materiale}
              <br />
              <strong>TEST:</strong> {data.TEST}
            </p>
            <div
              style={{
                fontSize: isMobile ? "13px" : "16px",
                color: "#aaa",
                lineHeight: "1.6",
                whiteSpace: "pre-line",
              }}
            >
              Test eseguiti e certificati dai Laboratori LBS.
            </div>
          </>
        ) : (
          <p>Informazioni tecniche non disponibili per {id}</p>
        )}
      </div>
    </div>
  );
}

