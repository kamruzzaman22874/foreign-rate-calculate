import axios from "axios";

const endPoint = "https://api-party-dashboard.sundarban.delivery/graphql";
const headers = {
    "Content-Type": "application/json",

};


const GetRate = `($country: String!, $service: String!, $carrier: String!, $weight: Float!) {
  getRate(country: $country, service: $service, carrier: $carrier, weight: $weight) {
    result
  }
}

`;

export const getRateData = (variables) => {
    const response = axios({
        url: endPoint,
        method: "post",
        data: {
          operationName: "GetRate",
          query: `query GetRate ${GetRate}`,
            variables,
        },
        headers: headers,
    });
    return response;
};