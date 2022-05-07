export default function outClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  function handleOutClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((action) => {
        html.removeEventListener(action, handleOutClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((action) => {
      setTimeout(() => {
        html.addEventListener(action, handleOutClick);
      });
    });
    element.setAttribute(outside, "");
  }
}
