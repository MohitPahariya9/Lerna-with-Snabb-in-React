import { h } from "snabbdom";
import { createApp } from './index.js';

function App(container) {
  const { updateView, updateState } = createApp(container, template);

  function template(state, updateState) {
    return h('div', [
      h('h1', state.count),
      h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add'),
    ]);
  }

  // Lifecycle events
  function onMount() {
    console.log('Component mounted');
  }

  function onStateChange() {
    console.log('State changed');
  }

  updateView();

  return {
    onMount,
    onStateChange,
  };
}

export { App };
