'use babel';

import HyperdataPulsarView from './hyperdata-pulsar-view';
import { CompositeDisposable } from 'atom';

export default {

  hyperdataPulsarView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.hyperdataPulsarView = new HyperdataPulsarView(state.hyperdataPulsarViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.hyperdataPulsarView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'hyperdata-pulsar:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.hyperdataPulsarView.destroy();
  },

  serialize() {
    return {
      hyperdataPulsarViewState: this.hyperdataPulsarView.serialize()
    };
  },

  toggle() {
    console.log('HyperdataPulsar was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
