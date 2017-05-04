//react库
import React from 'react';
import ReactDOM  from 'react-dom';
// import { Router, Route, Link, hashHistory,browserHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import { HashRouter, Route } from 'react-keeper'

//样式
import 'antd/dist/antd.css';
import '../app/static/sass/main.scss';

//组件
import Header from '../app/pages/header/header';
import Sider from '../app/pages/sider/sider';
import MyBreadCrumb from '../app/pages/components/myBreadCrumb';
import myTrade from '../app/pages/components/myTrade';
import myPayment from '../app/pages/components/myPayment';
import myRequirement from '../app/pages/components/myRequirement';

import List from '../app/pages/components/list';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    render() {
        return (
            <HashRouter >
            <div className="fm-wrap">
            <Header />
            <Sider />
                <div className="fm-contain">
                    <div className="fm-content">
                        <div className="fm-main">
                            <MyBreadCrumb />
                                <Route index  component={myTrade} />
                                <Route path="myTrade" component={myTrade}/>
                                <Route cache path="myPayment" component={myPayment}/>
                                <Route cache path="/list/:id" component={List} />
                                <Route cache path="myRequirement" component={myRequirement}/>
                        </div>
                    </div>
                </div>
            </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));