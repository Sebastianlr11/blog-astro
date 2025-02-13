export default function PreactBanner() {
    return (
      <div style={{ padding: "20px", border: "2px solid purple" }}>
        <h2>Hola desde Preact</h2>
        <button onClick={() => alert("¡Preact funcionando!")}>
          ¡Haz clic!
        </button>
      </div>
    );
  }
  