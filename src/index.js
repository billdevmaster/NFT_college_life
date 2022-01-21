import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const render = () => {
  import(`./assets/css/sass/main.scss`).then(() => {
    require('./AppRenderer');
  });
};
render();
