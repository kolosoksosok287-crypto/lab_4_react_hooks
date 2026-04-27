import { useState } from "react"
import Footer from "./components/Footer"
import Reviews from "./components/Reviews"
import ContactForm from "./components/ContactForm"

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div style={{
      minHeight: "100vh",
      background: dark ? "#1a1a2e" : "#f4f6f8",
      color: dark ? "#e0e0e0" : "#222",
      transition: "all 0.3s",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{ textAlign: "center", padding: "2rem" }}>
        <h1 style={{ color: dark ? "#ffffff" : "#1a73e8" }}>Vlad Pavliv — Web Developer</h1>
        <button onClick={() => setDark(!dark)} style={{
          marginTop: "1rem", padding: "8px 20px",
          borderRadius: "8px", border: "1px solid #888",
          cursor: "pointer",
          background: dark ? "#e0e0e0" : "#222",
          color: dark ? "#222" : "#e0e0e0"
        }}>
          {dark ? "☀️ Світла тема" : "🌙 Темна тема"}
        </button>
      </header>
      <main style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>
        <Reviews dark={dark} />
        <ContactForm dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  )
}

export default App