<script>
    let count = 0;
  </script>
  
  <div style="border: 2px solid blue; padding: 20px;">
    <h2>Contador de Svelte</h2>
    <p>Cuenta: {count}</p>
    <button on:click={() => count++}>Aumentar</button>
  </div>
  