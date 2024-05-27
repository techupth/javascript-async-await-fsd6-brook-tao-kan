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
function showData(data) {
  console.log(data);
}
function showError(data){
  console.log(data)
}

getJohnProfile().then(showData).catch(showError)