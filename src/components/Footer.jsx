function Footer({ dark }) {
  return (
    <footer style={{
      textAlign: "center", padding: "1.5rem", marginTop: "2rem",
      borderTop: "1px solid " + (dark ? "#444" : "#ccc"),
      fontSize: "14px",
      color: dark ? "#aaa" : "#888"
    }}>
      © 2026 Vlad Pavliv
    </footer>
  )
}
export default Footer