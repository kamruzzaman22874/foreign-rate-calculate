"use client"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import * as Carries from "../getAllData/getAllData"
import axios from "axios";

const CarrierData = ({ setCarrier }) => {
    const [carries, setCarries] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const carriesQueryResult = await axios.post(
                    Carries.GRAPHQL_API, {
                    query: Carries.GET_CARRIES_API
            }
            )
            const result = carriesQueryResult.data.data.getCarriers.result.list;
            setCarries(result);
        }

        fetchData()

    }, [])
    return (
        <div>
            <FormControl sx={{ minWidth: 400, marginBottom: "20px" }}>
                <InputLabel id="demo-simple-select-label">Carrier</InputLabel>
                <Select
                    onChange={(e) => setCarrier(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Carrier"
                >
                    {
                        carries.map(carry => <MenuItem key={carry.name} value={carry.name}>{carry.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default CarrierData;