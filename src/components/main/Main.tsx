import { Flex } from "../sytled.components"
import Caroussel from "./Caroussel"
import Info from "./Info"


const Main = (): JSX.Element => {
    return (
        <>
        <Flex>
            <Caroussel/>
            <Info/>
        </Flex>
        
        </>
    )

}

export default Main