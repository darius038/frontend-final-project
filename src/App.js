import './App.css';
import{BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/home/Main";
import Favourites from "./components/favourites/Favourites";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favdomain: []
        };
        this.callbackFromApp = this.callbackFromApp.bind(this);
    }
    //Lifting up state from child Main
    callbackFromApp = (childData) => {
        this.setState(prevState => ({
            favdomain: [...prevState.favdomain, childData[0]]
        }))
    }
    //Callback from Favourites to delete domain from the state
    delAppDomain = (e)=> {
        this.setState({
            favdomain: [...this.state.favdomain.filter(dom => dom.domain !== e)]
        })
        console.log("callback app delete props")
        console.log(e)
    }

    render() {
        return (
            <BrowserRouter>
                <div className="">
                    <Header/>
                    <Switch>
                        <Route exact path="/"component={() => <Main callbackFromApp={this.callbackFromApp} />}/>
                        <Route  path="/favourites" component={() =>
                            <Favourites favdomain={this.state.favdomain} callbackFromAppDel={this.delAppDomain}/>}/>
                        <Route path="/info" component={Info}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
