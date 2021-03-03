const { ERROR, LOADING, INIT, GETTEN, GETALL, LOADINGALL } = require("./actiontypes");

export const getten = (page) => (dispatch) => {

  const url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
  dispatch({
    type: LOADING
  })
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        data: response,
        type: GETTEN,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        data: "Error Ocurred",
        type: ERROR,
      });
    });
};

export const init = () => (dispatch) => {

  const url = `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10`
  dispatch({
    type: LOADING
  })
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        data: response,
        type: INIT,
      });
    })
    .catch((err) => {
      console.log(err)
      dispatch({
        data: "Error Ocurred",
        type: ERROR,
      });
    });
};

export const getall = () => (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/photos"
  dispatch({
    type: LOADINGALL
  })
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        data: response,
        type: GETALL
      });
    })
    .catch((err) => {
      console.log(err)
    });
};
