import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
//自己的第三方组件
import {
    AppBody,
    Panel,
    Buttons, Icon, Pagination,Row,Col} from '../components/index';
import {changeActiveAction} from '../redux/actions/MenuAction';
//自己书写的基类
import BaseContainer from '../components/pubController/BaseContainer';
import {BaseStore} from '../redux/store/BaseStore';
const store = BaseStore({  });
//数据流向
class IndexApp extends BaseContainer {
    constructor(props) {
        super(props);
    }

    handleButton(){
        let {MenuReducers, dispatch} = this.props;
        
    }

    onChange(page){
        console.log(`我是当前${page}`)
    }

    render() {
        return (
            <AppBody>
                <Row>
                    <Col span="50">
                        <Panel title="分页面板-简单分页">
                            <Pagination onChange = {this.onChange} total={50}/>
                        </Panel>
                    </Col>
                    <Col span="50">
                        <Panel title="分页面板2-更多分页">
                            <Pagination onChange = {this.onChange}/>
                        </Panel>
                    </Col>
                    <Col span="50">
                        <Panel title="分页面板2-带输入的分页">
                            <Pagination showQuickJumper onChange = {this.onChange}/>
                        </Panel>
                    </Col>
                    </Row>
            </AppBody>
        );
    }

    componentDidMount():void {
        let {MenuReducers, dispatch} = this.props;
        dispatch(changeActiveAction())
    }
    
    componentWillUnmount():void {
        
        }
}

let mapStateToProps = (state) => {
    return {
        MenuReducers: state.MenuReducers
    }
}

/**
 * 添加监听数据
 */
const App = connect(mapStateToProps)(IndexApp);
const ElementContainer = document.getElementById("example");
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    ElementContainer
);



