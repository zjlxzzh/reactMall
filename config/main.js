import React from 'react';
import ReactDOM from 'react-dom';

//样式
import 'antd/dist/antd.css';
import '../app/static/sass/main.scss';

//组件
import Header from '../app/pages/header/header.js';
import Sider from '../app/pages/sider/sider.js'


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
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));