import { useState } from "react"

function ContactForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2>Контактна форма</h2>
      {sent ? (
        <p style={{ color: "green" }}>Повідомлення надіслано!</p>
      ) : (
        <div>
          <input value={name} onChange={e => setName(e.target.value)}
            placeholder="Ваше ім'я" style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <textarea value={message} onChange={e => setMessage(e.target.value)}
            placeholder="Повідомлення" rows={4} style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          <button onClick={handleSubmit} style={{ padding: "8px 20px", borderRadius: "6px", border: "none", background: "#1a73e8", color: "#fff", cursor: "pointer" }}>
            Надіслати
          </button>
        </div>
      )}
    </section>
  )
}
export default ContactForm