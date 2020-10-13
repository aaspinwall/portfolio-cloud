const apiCall = async (url) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const response = await fetch(url);

  console.log(response);
  const { count } = await response.json();

  const counter = document.querySelector("#counter");
  counter.innerHTML = count;
};

const url = `https://d8xazeslzk.execute-api.us-east-1.amazonaws.com/Prod/hello`;
apiCall(url);
