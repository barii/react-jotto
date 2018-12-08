/**
 * Returns ShallowWrapper containing node(s) with given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within 
 * @param {string} val - Value of data-test attribute for search 
 * @returns {ShallowRenderer}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}