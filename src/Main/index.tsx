import { Container } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../routes';




export default function Main() {
    return(
        <NavigationContainer>
            <Container>
                <Routes/>
            </Container>
        </NavigationContainer> 
    )
}