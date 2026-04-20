const reviews = [
  { name: "Олена", text: "Чудова робота!" },
  { name: "Максим", text: "Дуже якісний код." },
  { name: "Софія", text: "Рекомендую!" },
]

function Reviews({ dark }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ color: dark ? "#fff" : "#222" }}>Відгуки</h2>
      {reviews.map((r, i) => (
        <div key={i} style={{
          background: dark ? "#2a2a3e" : "#fff",
          border: "1px solid " + (dark ? "#444" : "#eee"),
          borderRadius: "8px", padding: "1rem", marginTop: "10px",
          color: dark ? "#e0e0e0" : "#222"
        }}>
          <strong>{r.name}</strong>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  )
}
export default Reviews