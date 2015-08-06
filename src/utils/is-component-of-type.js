/**
 * Returns true if the provided property is a component of the provided name.
 *
 * @param componentName {String} - the component's name of the class definition
 * @param reactElement {ReactElement} - any React Element (not a real DOM node)
 *
 * @example
 * // Checks if the component is an Autocomplete
 * isComponentType('Autocomplete', this.props.children[0]);
 */
export default function isComponentOfType(displayName, reactElement) {
  return reactElement &&
         reactElement._isReactElement &&
         reactElement.type &&
         reactElement.type.displayName === displayName;
}
