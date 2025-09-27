import { useState } from "react";

function Formulario() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validar = (e) => {
    e.preventDefault();
    if (!email) {
      setError("El email es requerido");
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("Formato de email inválido");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <form onSubmit={validar}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Enviar</button>
      {submitted && <p>Formulario enviado con éxito ✅</p>}
    </form>
  );
}

export default Formulario;
