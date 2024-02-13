// packages/ui-library/src/index.js
import { init } from 'snabbdom/init';
import { h } from 'snabbdom/h';
import { classModule } from 'snabbdom/modules/class';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

function createApp(container, template) {
  let state = {};

  function updateState(newState) {
    state = { ...state, ...newState };
    updateView();
  }

  function updateView() {
    const newVnode = template(state, updateState);
    patch(container, newVnode);
  }

  return {
    updateView,
    updateState,
  };
}

export { createApp };
