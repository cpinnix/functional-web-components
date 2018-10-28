import { mergeAll } from "ramda";
import {
  create,
  getState,
  updateState,
  updateActions,
  mount,
  unmount,
  componentDidCreate
} from "../beeetle";

const didCreate = component =>
  console.log(["Created", component.name].join(" "));

const component = (...plugins) => {
  create(
    mergeAll([
      ...plugins,
      mount,
      unmount,
      updateState,
      getState,
      updateActions,
      componentDidCreate(didCreate)
    ])
  );
};

export default component;
