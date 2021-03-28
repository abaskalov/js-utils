export const postToUrlClient = (
  path: string,
  params: { [key: string]: any }
) => {
  const form: HTMLFormElement = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", path);

  for (const key in params) {
    const hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);

    form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
};
