document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
      console.log("Esta visible");
    } else {
      console.log("esta oculto");
    }
  });