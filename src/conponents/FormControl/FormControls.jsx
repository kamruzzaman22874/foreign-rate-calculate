"use client"
import { Button, Typography } from "@mui/material";
import CountryData from "../CountryData/CountryData";
import ServiceData from "../ServiceData/ServiceData";
import CarrierData from "../CarrierData/CarrierData";
import WeightData from "../WeightData/WeightData";
import image from "../../assets/image/scs1.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import * as Rate from "../getAllData/getAllData";
import { getRateData } from "../getAllData/rateData";
import Swal from "sweetalert2";
import Image from "next/image";

const FormControls = () => {
    const [country, setCountry] = useState("");
    const [service, setService] = useState("");
    const [carrier, setCarrier] = useState("");
    const [weight, setWeight] = useState("");
    const [total, setTotal] = useState({});
    const [rate, setRate] = useState("0");

    const handleTotal = () => {
        if (country && service && carrier && weight) {
            setTotal({ country, service, carrier, weight: parseFloat(weight) })
        }
        else {
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'Please Provide your information',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const queryResults = await axios.post(
    //             Rate.GRAPHQL_API, {
    //             query: Rate.GET_RATE_API,
    //             variables: total
    //         }
    //         )
    //         console.log(queryResults);
    //         const result = queryResults.data.data.getRate.result;
    //         setRate(result);
    //     }
    //     fetchData()

    // }, [total])

    useEffect(() => {
        getRateData(total)
            .then((res) => {
                console.log(res)
                setRate(res.data.data.getRate.result);
            })
            .catch((err) => console.log("err", err));
    }, [total]);


    return (
        <div>
            <div style={{ marginTop: "15px", textAlign: "center" }}>
                <Typography style={{ fontFamily: "sans-serif" }} variant="h4" gutterBottom>
                    Our International Services <br />
                </Typography>
                <Typography style={{ marginTop: "0px", marginBottom: "10px", textAlign: "center" }}>Provide by sundarban courier service(Pvt.)Ltd</Typography>
            </div>

            <div container spacing={2} sx={{ justifyContent: 'space-between'}} style={{display:"flex", alignItems:"center", marginLeft:"50px",paddingInline:"40px",paddingTop:"30px"}}>
                <div style={{width:"50%"}}>
                    <Image style={{width:"500px",height:"400px"}} src={image} alt=""></Image>
                </div>
                <div >
                    <CountryData  setCountry={setCountry} />
                    <ServiceData setService={setService} />
                    <CarrierData setCarrier={setCarrier} />
                    <WeightData setWeight={setWeight} />
                   <div style={{textAlign:"center"}}>
                        <p><span style={{ fontSize: "20px", color: "hotpink" }}>Total Cost : </span> <span style={{ fontSize: "20px", color: "green" }}>{rate ? rate: "service not available"} (BDT)</span></p>
                        <Button style={{ marginTop: "20px", width: "full" }} variant="outlined" onClick={handleTotal}>Calculate</Button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default FormControls;