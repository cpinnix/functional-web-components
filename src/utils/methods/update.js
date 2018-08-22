const toBooleanAttributeValue = value =>
  value === true ? "" : value === false ? null : value;

const applyAttribute = (element, name, value) =>
  value !== null
    ? element.setAttribute(name, value)
    : element.removeAttribute(name);

const applyAsAttributes = (element, attributes) =>
  Object.keys(attributes).forEach(name =>
    applyAttribute(element, name, toBooleanAttributeValue(attributes[name]))
  );

export const update = _ => ({
  ..._,
  update: base => state => {
    const element = base.getElement(base)(state);
    if (element) {
      base.render(base)(state);
      if (state.attrs) applyAsAttributes(element, state.attrs);
    }
  }
});
