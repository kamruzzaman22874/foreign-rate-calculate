"use client"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import * as Services from "../getAllData/getAllData"
import { useEffect, useState } from "react";

const ServiceData = ({ setService }) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const serviceQueryResult = await axios.post(
                Services.GRAPHQL_API, {
                query: Services.GET_SERVICES_API
            }
            )
            const result = serviceQueryResult.data.data.getServices.result.list;
            setServices(result);
        }

        fetchData()

    }, [])
    return (
        <div>
            <FormControl sx={{ minWidth: 400, marginBottom: "20px" }}>
                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                <Select
                    onChange={(e) => setService(e.target.value)}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Service"
                >
                    {
                        services.map(service => <MenuItem key={service.name} value={service.name}>{service.name}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default ServiceData;