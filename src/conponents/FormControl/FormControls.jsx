
"use client"
import { Button, Typography } from "@mui/material"
import CountryData from "../CountryData/CountryData";
import ServiceData from "../ServiceData/ServiceData";
import CarrierData from "../CarrierData/CarrierData";
import WeightData from "../WeightData/WeightData";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Rate from "../getAllData/getAllData"

const FormControls = () => {
    const [countrys, setCountrys] = useState("");
    const [serviceses, setServiceses] = useState("");
    const [carriess, setCarriess] = useState("");
    const [weights, setWeights] = useState("")
    const [total, setTotal] = useState({})
    const [rate, setRate] = useState([])

    const handleTotal = () => {
        setTotal({ countrys, serviceses, carriess, weights: parseFloat(weights) })
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const queryResults = await axios.post(
    //             Rate.GRAPHQL_API, {
    //             query: `
    //             query GetRate($country: String!, $service: String!, $carrier: String!, $weight: Float!) {
    //                 getRate(country: $country, service: $service, carrier: $carrier, weight: $weight) {
    //                     result
    //                 }
    //                 }
                
    //             `,
    //             variables: total
    //         }
    //         )
    //         console.log(queryResults);
    //         const result = queryResults.data.data.getRate.result.list;
    //         setRate(result);
    //     }
    //     fetchData()

    // }, [total])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const queryResults = await axios.post(
                    'https://api-party-dashboard.sundarban.delivery/graphql',
                    {
                        query: `
            query GetRate($country: String!, $service: String!, $carrier: String!, $weight: Float!) {
              getRate(country: $country, service: $service, carrier: $carrier, weight: $weight) {
                result
              }
            }
          `,
                        variables: total,
                    }
                );

                if (queryResults.data.errors) {
                    // Handle GraphQL errors
                    console.error('GraphQL errors:', queryResults.data.errors);
                    // You can set an error state or display an error message to the user
                } else {
                    // No errors, process the data
                    const result = queryResults.data.data.getRate.result;
                    setRate(result);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle network or other errors
                // You can set an error state or display an error message to the user
            }
        };

        fetchData();
    }, [total]);






    return (
        <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Typography variant="h2" gutterBottom>
                International Services <br />
            </Typography>


            <CountryData setCountrys={setCountrys} />
            <ServiceData setServiceses={setServiceses} />
            <CarrierData setCarriess={setCarriess} />
            <WeightData setWeights={setWeights} />
            <p>Total: {rate}</p>
            <Button onClick={handleTotal}>Calculate</Button>


        </div>
    );
};

export default FormControls;