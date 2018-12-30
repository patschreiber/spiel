/**
 * Entity: OldMan, A test entity
 * name: The humanized name of the npc
 * familiar: Have we met this particular npc before?
 *
 * key: The identifier of the dialogue option. e.g. "greeting", "farewell", etc.
 * type:
 *    spiel - A collection of text blocks with no dialogue options (no branches)
 *    tree - A collection of text boxes that offer options to branch the
 *           dialogue.
 *
 */

var OldMan = {
  name: "The Old Man",
  familiar: false,
  actions: {
    greet: {
      text: "Greet",
      callback: function() {
        alert("hi");
      }
    },
    farewell: {
      text: "Goodbye"
    }
  },

  greeting_unmet: {
    type: "spiel",
    blocks: [
      "Hello there, I'm the Old Man, a test entity for you to talk to",
      "I was created by the developer to test the new text system in the game, I think he's calling it \"Spiel\" or something?",
      "Regardless you'll see all sorts of text in this adventure. I'll spout long blocks of text, short blocks, weird blocks, and maybe even give you some dialogue options; who knows!",

    ],
    actions: {
      continue: {
        text: "Continue"
      }
    }
  },

  greeting_met: {
    type: "spiel",
    blocks: [
      "Hello again!"
    ]
  },
  this_or_that: {
    type: "tree",
    blocks: {

    }
  }
}

export default OldMan;
