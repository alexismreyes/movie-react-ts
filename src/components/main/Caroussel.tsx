import { useEffect, useState } from "react"
import { Avatar, AvatarContainer, Container, Degrade } from "../sytled.components"
import BlackWidow from '../../assets/black-widow.png'
import { Item, Movie } from "../interfaces/interfaces";

const Caroussel = (): JSX.Element =>{

    const [data,setData] =  useState<Movie[]>([]);

    const getData = async(): Promise<void> => {
        const url = import.meta.env.VITE_API_URL;
        const items = await fetch(url);
        const response = await items.json();

        const allItems = response.data.results.map( (item:Item) => {
            const obj: Movie = {
                name: item.name,
                description: item.description,
                thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
            }
            return obj;
        })

        console.log("All items retrieved->",allItems);
        setData(allItems);        
    }

    useEffect(()=>{
        getData();
    },[]);

    if (!data || data.length === 0) return <h2>Fetching API data...</h2>

    return(
        <>
        <Container height={50} src={data[2].thumbnail} />
        <AvatarContainer height={50}>
            <Avatar height={50} src={BlackWidow} />
        </AvatarContainer>
        <Degrade height={50}/>
        </>
    )
}
export default Caroussel