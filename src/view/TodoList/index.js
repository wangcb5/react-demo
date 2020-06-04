import React from 'react';
import Table from './Table'
import Form from "./Form";


export default class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tableList: [
                {
                    name: 'jack',
                    job: 'bank',
                    status: 0,
                    id: 1
                }
            ],
            id: '',
            num: 0
        }
        this.formRef = React.createRef()
    }

    componentDidMount() {
        this.setState({
            id: this.props.match.params.id,
            // num: this.props.location.state.num
        })
    }

    removeTableList (data) {
        this.setState({
            tableList: this.removeData(data)
        })
    }
    removeData(data){
        let res = [];
        this.state.tableList.forEach(item => {
            if (item.id != data.id) {
                res.push(item)
            }
        });
        return res
    }

    updateTableList (data) {
        this.setState({
            tableList: this.updateData(data)
        })
    }

    updateData(data) {
        let res = [];
        this.state.tableList.forEach(item => {
            if (item.id == data.id) {
                item.status = 1
            }
            res.push(item)
        });
        return res
    }

    // submitForm(data) {
    //     let { tableList } = this.state;
    //     tableList.push(Object.assign(data, {
    //         id: this.state.tableList.length
    //     }));
    //     this.setState({
    //         tableList
    //     })
    // }
    submitForm() {
        let { tableList } = this.state;
        tableList.push(Object.assign(this.formRef.current.state, {
            id: this.state.tableList.length + 1
        }));
        this.setState({
            tableList
        });
        this.formRef.current.setState({
            name: '',
            job: '',
        });
    }

    //通过ref来通信   通过pulish_event来通信    通过callback形式来通信   mobx
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <span>id: {this.state.id}</span>
                {/*<span>num: {this.state.num}</span>*/}
                <Form ref={this.formRef}  submitBtn={<input type="button" value="Submit" onClick={this.submitForm.bind(this)} />}>
                </Form>
                <Table OnUpdateTableList={this.updateTableList.bind(this)} OnRemoveTableList={this.removeTableList.bind(this)} TableList={this.state.tableList}></Table>
                <input type="button" value={'back'} onClick={() => this.props.history.goBack()}/>
            </div>
        );
    }
}