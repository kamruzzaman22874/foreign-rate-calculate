export const GRAPHQL_API = "https://api-party-dashboard.sundarban.delivery/graphql";

export const GET_COUNTRY_QUERY = `
query GetCountries {
  getCountries {
    message
    result {
      list {
        name
      }
    }
  }
}
`;


export const GET_SERVICES_API = `
query GetServices {
  getServices {
    result {
      list {
        name
      }
    }
  }
}

`

export const GET_CARRIES_API = `
query List {
  getCarriers {
    result {
      list {
        name
      }
    }
  }
}

`;

// export const GET_RATE_API = `
// query GetRate($country: String!, $service: String!, $carrier: String!, $weight: Float!) {
//   getRate(country: $country, service: $service, carrier: $carrier, weight: $weight) {
//     result
//   }
// }
// `
