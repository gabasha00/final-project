document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("title");
  if (!el) return;

  const fullText = el.textContent.trim();
  el.textContent = ""; 

  let started = false;

  function typeIt() {
    if (started) return;
    started = true;

    let i = 0;
    const speed = 100; 

    const tick = () => {
      el.textContent = fullText.slice(0, i);
      i++;
      if (i <= fullText.length) setTimeout(tick, speed);
      else el.classList.add("typed");
    };

    tick();
  }

  document.addEventListener("pointerdown", typeIt, { once: true });

  setTimeout(typeIt, 1500);
});
