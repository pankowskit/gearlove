import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ServiceS1 from "../components/service-s1";
import ServiceS2 from "../components/service-s2";
import ServiceS3 from "../components/service-s3";

class Service extends Component{
    render(){
        return(        
            <Container fluid className="minh-100vh p-0">
                <ServiceS1/>
                <ServiceS2/>
                <ServiceS3/>
            </Container>    
        );
    }
}

export default Service;