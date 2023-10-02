import Image from 'next/image';
// import SendIcon from '@mui/icons-material/Send';
import  Button  from '@mui/material/Button';
import logo from "@/assets/image/logo (3).png"
import SendIcon from '@mui/icons-material/Send';
const Header = () => {
    return (
        <nav>
            <div class='bg-black' style={{ display: 'flex', justifyContent: 'space-between', backgroundColor:"pink", padding:"15px"}}>
                <div>
                    <Image width={50} height={50} src={logo} 
                        style={{ borderRadius: '50%', backgroundColor:"[#3ff20]"}}
                        alt="logo image" />
                </div>
                <Button variant="outlined" color='primary' >
                    Calculate
                    <SendIcon/>
                </Button>
            </div>
        </nav>
    );
};

export default Header;