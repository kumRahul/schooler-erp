import ServiceURL from "./constants";

const loginURL = ServiceURL.LOGIN;

export const loginService = async (formData, successCallback, errCallBack) => {
  let options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.user,
      password: formData.password,
    }),
  };
  let response = await fetch(loginURL, options);
  let responseOK = response && response.ok;
  if (responseOK) {
    let data = await response.json();
    successCallback(data);
  } else {
    errCallBack();
  }
};
