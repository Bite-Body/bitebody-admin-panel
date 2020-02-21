import React, { Component } from 'react'
import '../static/css/Admin.css'

class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = {httpMethod: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        let change = {}
        change[event.target.name] = event.target.value
        this.setState(change)

        console.log(this.state)
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {


      return (
        <div className="container crud">

                <form onSubmit={this.handleSubmit}>
                    <div className="row">

                        <div className="col-md-6">
                        <select name="httpMethod" onChange={this.handleChange} className="browser-default custom-select">
                            <option httpMethod="">Choose Operation</option>
                            <option httpMethod="POST">CREATE</option>
                            <option httpMethod="GET">READ</option>
                            <option httpMethod="PUT">UPDATE</option>
                            <option httpMethod="DELETE">DELETE</option>
                        </select>
                        </div>

                        <div className="col-md-6">
                        <select className="browser-default custom-select">
                            <option>Choose Entity</option>
                            <option value="User">User</option>
                            <option value="Workout">Workout</option>
                            <option value="Youtube_Video">Youtube_Video</option>
                            <option value="Collaborators">Collaborator</option>
                            <option value="Meals">Meal</option>
                        </select>
                        </div>

                    </div>

                    <center>
                        <button type="submit" class="btn btn-primary button-spacing">Submit</button>
                    </center>

                </form>
            
        </div>
      );
    }
  }

export default Admin