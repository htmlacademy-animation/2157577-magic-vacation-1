export default () => {
  let body = document.querySelector(`body`);
  window.onload = () => {
    body.className = `loaded`;
  };
};
