"use client"
import TextField from '@mui/material/TextField';

const WeightData = ({ setWeight }) => {
  

    return (
        <div>
            <div>
                <TextField id="outlined-basic"
                    sx={{ minWidth: 400, marginBottom: "20px" }}
                    onChange={(e) => setWeight(e.target.value)}
                    label="Weight"
                    type='number'
                    variant="outlined" />
            </div>
        </div>
    );
};

export default WeightData;