//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
const onSuccess = (data) => {
  return console.log(data);
};
const onFailure = (error) => {
  return console.log(error);
};

getJohnProfile().then(onSuccess).catch(onFailure);
