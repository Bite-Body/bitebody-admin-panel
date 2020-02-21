import React, { Component } from 'react'
import '../static/css/Admin.css'

class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        httpMethod: '',
        entity: '',
        payload: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.handlePayload = this.handlePayload.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({payload: {}}) //if you change entity or httpMethod this will reset payload

      let change = {}
      change[event.target.name] = event.target.value
      this.setState(change)

      console.log(this.state)
    }

    handlePayload(event){
      let current_payload = this.state.payload
      current_payload[event.target.name] = event.target.value
      this.setState({payload: current_payload})
      console.log(this.state)
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      event.preventDefault();
      console.log(this.state)
    }
  
    render() {
      const createUser = (
        <>

          <div className="form-group">
            <label htmlFor="name">First name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={this.state.first_name}
                onChange={this.handlePayload}
                />
          </div>

          <div className="form-group">
            <label htmlFor="name">Last name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your last name"
                value={this.state.last_name}
                onChange={this.handlePayload}
                />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handlePayload}
                />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePayload}
                />
          </div>

        </>
      )

      return (
        <div className="container crud">

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                        <select name="httpMethod" onChange={this.handleChange} className="browser-default custom-select">
                            <option value="">Choose Operation</option>
                            <option value="POST">CREATE</option>
                            <option value="GET">READ</option>
                            <option value="PUT">UPDATE</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        </div>

                        <br/><br/>

                        <div className="col-md-6">
                        <select name="entity" onChange={this.handleChange} className="browser-default custom-select">
                            <option value="">Choose Entity</option>
                            <option value="users">User</option>
                            <option value="workouts">Workout</option>
                            <option value="youtube_Videos">Youtube_Video</option>
                            <option value="collabs">Collaborator</option>
                            <option value="meals">Meal</option>
                        </select>
                        </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        {this.state.httpMethod === "POST" ? (this.state.entity === "users" ? createUser : null) : null}
                      </div>
                    </div>

                    <center>
                        <button type="submit" className="btn btn-primary button-spacing">Submit</button>
                    </center>

                </form>
            
        </div>
      );
    }
  }

export default Admin