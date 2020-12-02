import React, {Component} from 'react';
import FavDomainItem from "../domain-item/FavDomainItem";

class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ready: false
        };
    }

    componentDidMount() {
        this.setState({data:this.props.favdomain, ready: true})
    }

    delDomain = (e)=> {
        this.setState({
            data: [...this.state.data.filter(dom => dom.domain != e.target.dataset.id)]
        })
        this.props.callbackFromAppDel(e.target.dataset.id)
    }

    render() {
        let favdomains;
        if (this.state.ready) {
            favdomains = this.state.data.map((data, index) => <FavDomainItem
                key={index}
                name={data.domain}
                country={data.country}
                regdate={data.create_date}
                a={data.A}
                ns={data.NS}
                cname={data.CNAME}
                delDomain = {this.delDomain}
            />);
        }
        return (
            <div className="container">
                {favdomains}
            </div>
        );
    }
}
export default Favourites;