import {Alert} from "react-bootstrap";

function Error(props) {
        return (
            <div className='col-md-6 col-sm-6 mt-3'>
            <Alert variant="danger" >
                <Alert.Heading>Ooops something wrong!</Alert.Heading>
                <p>
                    No records found, this domain may not registered.
                    Try search new domain name!
                    <hr/>
                    You searched for: {props.value}
                </p>
            </Alert>
                </div>
        );
}
export default Error;