"use client"
import image from "../../assets/image/scs1.jpg"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Countries from "../getAllData/getAllData"
import Image from "next/image";

const CountryData = ({ setCountry }) => {

    const [countrysData, setCountrysData] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            const queryResult = await axios.post(
                Countries.GRAPHQL_API,{
                    query: Countries.GET_COUNTRY_QUERY
                }
            )
            // console.log(queryResult);
            const result = queryResult.data.data.getCountries.result.list;
            setCountrysData(result);
        }

        fetchData()

    } , [])
    return (
        <div>
            
            <FormControl sx={{ minWidth: 400, marginBottom: "20px" }}>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    onChange={(e) => setCountry(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Country"
                >
                    {
                        countrysData.map(country => <MenuItem key={country.name} value={country.name}>{country.name}</MenuItem>)
                    }
                    
                </Select>
            </FormControl>
        </div>
    );
};

export default CountryData;