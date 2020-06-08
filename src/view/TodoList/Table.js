import React, {Component} from 'react'
import PropTypes from 'prop-types'

export  default class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    //将要装载，在render之前调用；每一个组件render之前立即调用;可以在服务端被调用，也可以在浏览器端被调用；
    componentWillMount(){
        console.log('componentWillMount')
    }

    render() {
        let tableList = [];
        if (this.props.TableList instanceof Array && this.props.TableList.length > 0) {
            tableList = this.props.TableList.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.job}</td>
                        <td>{item.status == 1 ? '已更新' : '未更新'}</td>
                        <td>
                            <input onClick={() => this.props.OnRemoveTableList(item)}  className={'removeBtn'} type="button" value={'删除'}/>
                            {item.status == 1 ? '' :  <input type="button" onClick={() => this.props.OnUpdateTableList(item)} value={'更新'}/>}
                        </td>
                    </tr>
                )

            });
        } else {
            tableList = (
                <tr>
                    <td colSpan={'4'}>
                        暂无数据。。。
                    </td>
                </tr>
            )
        }

        return (
            <table className='tableList' cellPadding={0} cellSpacing={0}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Status</th>
                    <th>handler</th>
                </tr>
                </thead>
                <tbody>
                {tableList}
                </tbody>
            </table>
        );
    }
    //装载完成，在render之后调用;render之后并不会立即调用，而是所有的子组件都render完之后才可以调用;只能在浏览器端被调用，在服务器端使用react的时候不会被调用
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps){ //return  true/false  ture会重新渲染  false不会render // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
       console.log('shouldComponentUpdate');
       console.log(nextProps.TableList);
            return  true
    }
    componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法 this.setState
        // this.setState({TableList: nextProps.TableList});
        console.log('componentWillReceiveProps')
    }
    //this.foreUpdate() 是否依赖其他数据
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        console.log('componentDidCatch')
    }

}
Table.propTypes = {
    TableList: PropTypes.array.isRequired
};