const BASE_FONT_SIZE = 18;
const DESIGN_SIZE = 1920;
const MAX_ROOT_SIZE = 23.768;

interface RemConfig {
  baseFontSize: number;
  designWidth: number;
  maxRootSize: number;
}

function rem(config?: Partial<RemConfig>) {
  const { baseFontSize = BASE_FONT_SIZE, designWidth = DESIGN_SIZE, maxRootSize = MAX_ROOT_SIZE } =
    config ?? {};
  const setRem = () => {
    const clientWidth = document.documentElement.clientWidth;
    const per = clientWidth / designWidth;
    const rem = per * baseFontSize;
    if (rem < maxRootSize) {
      document.documentElement.style.fontSize = `${rem}px`;
    } else {
      document.documentElement.style.fontSize = `${maxRootSize}px`;
    }
  };

  setRem();

  window.onresize = () => {
    setRem();
  };
}

export default rem;
