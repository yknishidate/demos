export function setupCompactUi({ hud, button }) {
  let collapsed = false;

  function sync() {
    hud.classList.toggle("collapsed", collapsed);
    button.setAttribute("aria-label", collapsed ? "Expand controls" : "Collapse controls");
    button.title = collapsed ? "Expand controls" : "Collapse controls";
  }

  button.addEventListener("click", () => {
    collapsed = !collapsed;
    sync();
  });

  sync();

  return {
    get collapsed() {
      return collapsed;
    },
    set collapsed(value) {
      collapsed = Boolean(value);
      sync();
    },
  };
}
