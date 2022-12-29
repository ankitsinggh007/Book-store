import React,{useState,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import classes from "./Desciption.module.css"
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Desciption() {
    const API_KEY=`AIzaSyCFwMBb4r146zfcv-IrdUn-vk8_asDkvck`;

    const [Data, setData] = useState([]);

    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=40&key=${API_KEY}`);
            const data = await response.json();
            console.log(data, "data")
            const result = data?.items?.filter(obj => (obj.volumeInfo && obj.volumeInfo.imageLinks && obj.volumeInfo.imageLinks.thumbnail && obj.volumeInfo.title && obj.volumeInfo.authors && obj.volumeInfo.description));
            console.log(result);
            setData(result[0])


        }
        fetchData();
    }, [])
    return (
        <div className={classes.container}>
        <div>
        {
            Data.length!=0 &&
            
            <div className={classes.Deatils}>
                <h1 className={classes.header}>{name}</h1>
            <div className={classes.image} style={{backgroundImage:`url(${Data?.volumeInfo?.imageLinks?.thumbnail})`}} />
            <div className={classes.author}>{Data.volumeInfo.authors[0]}</div>
            <div className={classes.price}></div>
            <div className={classes.rating}>Rating:{Math.floor(Math.random() * (5 - 3 + 1)) + 3}/5</div>
            <div className={classes.description}>
                <span className={classes.header}>Description</span>
                <p className={classes.paragraph}>{Data.volumeInfo.description}</p>
            </div>
        </div>
        }
        </div>
        <div className={classes.action}>
       <Link to={"/cart"} style={{textDecoration:"none", color:"black"}}><Button variant="contained" style={{backgroundColor:"#161619",padding:"15px",fontSize:"1.2rem"}}><ShoppingCartIcon/>&nbsp; Add To Cart</Button></Link>
       <Link to={"/wishlist"} style={{textDecoration:"none", color:"black"}}><Button variant="contained" style={{backgroundColor:"#161619",padding:"15px",fontSize:"1.2rem"}}><ShoppingBasketIcon/> &nbsp; Buy Now</Button></Link>

        </div>

        </div>
    )
}

export default Desciption