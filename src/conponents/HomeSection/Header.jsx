// import SendIcon from '@mui/icons-material/Send';
import  Button  from '@mui/material/Button';
import logo from "@/assets/image/scs.png"
import SendIcon from '@mui/icons-material/Send';
import Image from 'next/image';
const Header = () => {
    return (
        <nav >
            <div style={{ display: 'flex', boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)", justifyContent: 'space-between', paddingInline:"50px", padding:"10px 50px"}}>
                <Image width={70} src={logo}></Image>
                <Button  variant="outlined" color='primary' >
                    Calculate
                    <SendIcon/>
                </Button>
            </div>
        </nav>
    );
};

export default Header;