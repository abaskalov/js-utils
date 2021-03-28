export const debounce = function (func: Function, wait: number): Function {
  let timeout: number | null;
  return () => {
    const later = function () {
      timeout = null;
    };
    const callNow = !timeout;
    timeout && clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
    if (callNow) func();
  };
};
