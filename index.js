// Importações da pasta dom
import data from './src/dom/data.js';
import eventHandler from './src/dom/event-handler.js';
import manipulator from './src/dom/manipulator.js';
import selectorEngine from './src/dom/selector-engine.js';

// Importações da pasta util
import backdrop from './src/util/backdrop.js';
import { sanitizeHtml } from './src/util/sanitizer.js';  // Importação nomeada
import { enableDismissTrigger } from './src/util/component-functions.js';  // Função nomeada
import config from './src/util/config.js';
import focusTrap from './src/util/focustrap.js';
import scrollBar from './src/util/scrollbar.js';
import swipe from './src/util/swipe.js';
import templateFactory from './src/util/template-factory.js';

// Exportações organizadas
export const Dom = {
  data,
  eventHandler,
  manipulator,
  selectorEngine,   
};

export const Util = {
  backdrop,
  sanitizeHtml,
  enableDismissTrigger,  // Agora você pode acessar enableDismissTrigger diretamente
  config,
  focusTrap,
  scrollBar,
  swipe,
  templateFactory,
};

// Não é mais necessário exportar o default
// export default {
//   Dom,
//   Util,
// };
