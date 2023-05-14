export function ready(fn: (window: Window) => void) {
  if (document.readyState != "loading") {
    fn(window)
  } else if (window.addEventListener) {
    window.addEventListener("DOMContentLoaded", fn.bind(window, window))
  }
}
