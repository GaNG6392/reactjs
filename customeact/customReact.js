function customRender(reactElement, customReact) {
  document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
}
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'click to me visit google',
};

const customReact = document.querySelector('root');

customRender(reactElement, customReact);
