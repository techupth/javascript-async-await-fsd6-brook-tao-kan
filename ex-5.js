// Exercise #5
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




async function showResult(){
  try{
    const showData = await getJohnProfile();
    console.log(showData);
  } catch (error){
    console.log(error)
  }
}
showResult();






