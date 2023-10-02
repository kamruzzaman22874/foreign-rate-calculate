"use client"
import TextField from '@mui/material/TextField';

const WeightData = ({ setWeights }) => {
  

    
    return (
        <div>
            <div>
                <TextField id="outlined-basic"
                    sx={{ minWidth: 240, marginBottom: "20px" }}
                    onChange={(e) => setWeights(e.target.value)}
                    label="Weight"
                    variant="outlined" />
            </div>
        </div>
    );
};

export default WeightData;