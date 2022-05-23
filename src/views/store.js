import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import StoreS1 from "../components/store-s1";

class Store extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <StoreS1/>
            </Container>    
        );
    }
}

export default Store;