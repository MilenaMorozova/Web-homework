import { Component } from "react";
import { CreateTaskBlock, Task } from "./Task"

class Todo extends Component {
    state = { tasks:["Buy milk, bread, eggs"] }

    createTask(text) {
        const new_value = this.state.tasks.slice();
        new_value.push(text);
        this.setState({tasks: new_value});
    }

    deleteTask(index) {
        const new_value = this.state.tasks.slice();
        new_value.splice(index, 1);
        this.setState({tasks: new_value});
    }

    changeTask(index, newText) {
        const new_value = this.state.tasks.slice();
        new_value[index] = newText;
        this.setState({tasks: new_value});
    }

    render() {
        return <div>
        <CreateTaskBlock createTask={text => this.createTask(text)} />
        <div>
            {this.state.tasks.map((task, i) => <Task text={task} 
                                                     deleteSelf={() => this.deleteTask(i)} 
                                                     changeSelf={(text) => this.changeTask(i, text)}
                                                />)}
        </div>
      </div>
    }
}

export default Todo;