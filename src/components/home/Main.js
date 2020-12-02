import React, {Component} from 'react';
import "./main.scss"
import Error from "../error/Error";
import DomainItem from "../domain-item/DomainItem";
import Alert from "react-bootstrap/Alert";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: {},
            response: 0,
            searching: false,
            temp: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.sendData = this.sendData.bind(this);
    }
    //Handling form input change event
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    //Handling search form submit event
    handleFormSubmit(event) {
        this.searchDomain(this.state.value);
        this.setState({temp: this.state.value, value: '', searching: true});
        event.preventDefault();
    }

    //Fetching data from API
    async searchDomain(dom) {
        let response = await fetch("https://api.domainsdb.info/v1/domains/search?domain=" + dom);

        if (response.ok) {
            let data = await response.json();
            this.setState({data: data.domains, response: 1, searching: false});
        } else {
            this.setState({response: 2, searching: false});
        }
    }

    //Adding domain to favourites
    sendData() {
        let send = this.state.data;
        this.props.callbackFromApp(send);
    }

    render() {
        let domain;
        let _visible = {display: 'none'};

        if (this.state.response === 2) {
            domain = <Error value={this.state.temp}/>
        }

        if (this.state.searching) {
            domain = "searching for " + this.state.temp + " ....."
        }

        if (this.state.response === 1) {
            // domain = this.state.data.map((data, index) => <DomainItem
            //     key={index}
            //     name={data.domain}
            //     country={data.country}
            //     regdate={data.create_date}
            //     a={data.A}
            //     ns={data.NS}
            //     cname={data.CNAME}
            // />);
            domain = <DomainItem
                key={this.state.response}
                name={this.state.data[0].domain}
                country={this.state.data[0].country}
                regdate={this.state.data[0].create_date}
                a={this.state.data[0].A}
                ns={this.state.data[0].NS}
                cname={this.state.data[0].CNAME}
            />;
            _visible = {}
        }

        return (
            <div className="container">
                <div className="row">
                    <form className="col-md-6 mt-3" onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="search">Search domain name, eg. "delfi.lt"</label>
                            <input type="text" className="form-control" id="search"
                                   value={this.state.value} onChange={this.handleChange}
                                   aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Search</button>
                        <button type="submit" className="btn btn-primary ml-3"
                                onClick={this.sendData} style={_visible}>Save to favourites
                        </button>
                    </form>
                </div>
                <div className="row mt-3">
                    {domain}
                </div>
            </div>
        );
    }
}

export default Main;