import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OldMan from './data/dialogues/OldMan.js'

class NPCBox extends React.Component {
  constructor(props) {
    super(props);
    let npc = OldMan;
    this.state = {
      npc_name: npc.name,
      actions: npc.actions
    }
  }

  renderAction(action) {
    return (
      <Action
        key={action}
        value={this.state.actions[action].text}
        onClick={this.state.actions[action].callback}
      />
    )
  }

  render() {
    let actions = [];
    // We don't know how many actions will exist for a given npc, so we need to
    // loop over them and render an action for each.
    for (let action in this.state.actions) {
      actions.push(this.renderAction(action));
    }
    return (
      <div className="npc-box">
        <fieldset>
          <legend>{this.state.npc_name}</legend>
          <TextArea />
          {actions}
        </fieldset>
      </div>
    )
  }
}

function Action(props) {
  return (
    <button className="action" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

function TextArea(props) {
  return (
    <div className="text"></div>
  )
}

// ========================================

ReactDOM.render(
  <NPCBox />,
  document.getElementById('dialogue-container')
);

