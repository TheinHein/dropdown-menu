function toggle(element) {
  const items = Array.from(element.children[0].children);
  for (let i = 0; i < items.length; i++) {
    if (items[i].className === "visible") {
      setTimeout(() => {
        items[items.length - 1 - i].classList.add("hide");
      }, 50 * i);
    } else {
      setTimeout(() => {
        items[i].classList.add("visible");
        items[i].classList.remove("hide");
      }, 100 * i);
    }
  }
}
