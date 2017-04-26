import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

//样式
import 'antd/dist/antd.css';
import '../app/static/sass/main.scss';

//组件
import Header from '../app/pages/header/header';
import Sider from '../app/pages/sider/sider';
import MyBreadCrumb from '../app/pages/components/myBreadCrumb';
import myTrade from '../app/pages/components/myTrade';
import myPayment from '../app/pages/components/myPayment';
import myApplication from '../app/pages/components/myApplication';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    render() {
        return (
            <div className="fm-wrap">
            <Header />
            <Sider />
                <div className="fm-contain">
                    <div className="fm-content">
                        <div className="fm-main">
                            <MyBreadCrumb />
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render((
<Router history={hashHistory} >
    <Route path="/" component={App}>
        <IndexRoute  component={myTrade} />
        <Route path="myTrade" component={myTrade}/>
        <Route path="myPayment" component={myPayment}/>
        <Route path="myApplication" component={myApplication}/>
    </Route>
</Router>
), document.getElementById('app'));