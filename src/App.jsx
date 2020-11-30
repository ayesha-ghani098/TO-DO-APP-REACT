import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      // todos: ["Ayesha","faha","ayesh"],
      todos: [{title: "Ayesha", edit: false}, {title: "Ayesh", edit: false}, {title: "Ayes", edit: false}],
      value: ''
    }  
  }
  // add_item = () =>{
  //   this.state.todos.push(this.state.value)
  //   this.setState({
  //     todos: this.state.todos
  //   })
  // }
  // add_item = () =>{
  //   this.setState({
  //     todos: [...this.state.todos,this.state.value],
  //     value: ''
  //   })
  // }
    add_item = () =>{
      let obj = {title: this.state.value}
    this.setState({
      todos: [...this.state.todos,obj],
      value: ''
    })
  }
  delete_item = (index) =>{
this.state.todos.splice(index,1)
this.setState({
todos: this.state.todos
})
  }
//   edit_item = (index) =>{
// let updated_value = prompt("Edit your todo");
// this.state.todos[index] = updated_value
// this.setState({
//   todos: this.state.todos
//   })
edit_item = (index,val) =>{
this.state.todos[index].edit = true
this.setState({
  todos: this.state.todos
})
  }
  handlechange = (e,index) => {
this.state.todos[index].title = e.target.value
this.setState({
  todos: this.state.todos
})
  }

  update = (index) =>{
    this.state.todos[index].edit = false
this.setState({
  todos: this.state.todos
})
  }
  render(){
    let {todos,value} = this.state;
    return(
      <div>
        <h1>My To Do</h1>
        <ul>
          
        <input value={value} onChange={(e) => this.setState({value: e.target.value})} type="text" placeholder="Enter value"/>
        <button onClick={this.add_item}>Add Item</button>
          {
          todos.map((v,i)=>{
            return <li key={i}>
              {v.edit ? <input value={v.title} type="text" onChange={(e)=>this.handlechange(e,i)} />: v.title}
              <br/>
              {v.edit ?   <button onClick={() => this.update(i)}>Update</button> : 
                <button onClick={() => this.edit_item(i,v.title)}>Edit</button> }
              <button onClick={() => this.delete_item(i)}>Delete </button>
              <br/>
              </li>
            }
            )}
        </ul>
      </div>
    )
  }
}

export default App;
