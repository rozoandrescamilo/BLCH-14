import * as functions from "firebase-functions";

async function registerOrder() {
  const url = "https://u0ki1p5w0y-u0v3325p51-connect.us0-aws.kaleido.io/gateways/u0kr8lllu7/0xd2fc1c88e0118ba7ae264cc8368c80c251f95272/RegisterPO?kld-from=0x425c5f3cc4aa065ef5b8671d246244a279d7c6a9&kld-sync=true";
  const options = {
    method: "POST",
    headers: {
      "Authorization": "Basic dTBmMnc5dnh....",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      POID: "#idOrder",
      userWallet: "0x425c5f3cc4aa065ef5b8671d246244a279d7c6a9"
    })
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}
