import Link from "next/link";
import Image from "next/image";

const samples = [
  "MH01", "MH02", "MH03", "MH04", "MH05", "MH06", "MH07", "MH08", "MH09", "MH10",
  "MH11", "MH12", "MH13", "MH14", "MH15", "MH16", "MH17", "MH18", "MH19", "MH20",
  "MH21", "MH22", "MH23", "MH24", "MH25", "MH26", "MH27", "MH28", "MH29", "MH30",
  "MH31", "MH32", "MH33", "MH34", "MH35", "MH36", "MH37", "MH38", "MH39", "MH40",
  "MH41", "MH42", "MH43", "MH44", "MH45", "MH46", "MH47", "MH48", "MH49", "MH50",
  "MH51", "MH52", "MH53", "MH54", "MH55", "MH56", "MH57", "MH58", "MH59", "MH60",
  "MH61", "MH62", "MH63", "MH64", "MH65", "MH66", "MH67", "MH68", "MH69", "MH70",
  "MH71", "MH72", "MH73", "MH74", "MH75", "MH76", "MH77", "MH78", "MH79", "MH80",
  "MH81", "MH82", "MH83", "MH84", "MH85", "MH86", "MH87", "MH88", "MH89", "MH90",
];

export default function Catalog() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Catalogo Campionature</h1>
      <div style={styles.gridWrapper}>
        <div style={styles.grid}>
          {samples.map((code) => (
            <Link key={code} href={`/sample/${code}`} style={styles.card}>
              <div style={styles.cardInner}>
                <Image
                  src={`/miniature/${code}.png`}
                  alt={code}
                  width={200}
                  height={200}
                  style={styles.image}
                />
                <span style={styles.code}>{code}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "black",
    minHeight: "100vh",
    padding: "40px 20px",
    color: "white",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: 300,
  },
  gridWrapper: {
    overflowX: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    minWidth: "1000px", // così anche su telefono restano 5 colonne e basta scrollare orizzontalmente
  },
  card: {
    textDecoration: "none",
  },
  cardInner: {
    backgroundColor: "#1a1a1a",
    borderRadius: "16px",
    padding: "10px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  image: {
    borderRadius: "12px",
    width: "100%",
    height: "auto",
    objectFit: "cover",
    transition: "transform 0.3s",
  },
  code: {
    display: "block",
    marginTop: "8px",
    fontSize: "14px",
    color: "#ccc",
  },
};
