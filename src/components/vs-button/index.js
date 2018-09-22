import create from "../../create";
import { hyper } from "../../hyper";
import { render, name, state } from "../../utils";
import "../vs-text";

create(
  name("vs-button"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  render(
    hyper((wire, { actions: { click } }) => {
      return wire()`
      <button onclick=${click}>
        <vs-text state=${state => "Hello"}>
        </vs-text>
      </button>
    `;
    })
  )
);
