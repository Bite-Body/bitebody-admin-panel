import React, { Component } from 'react'
import ReactJson from 'react-json-view'
import '../static/css/Admin.css'

class Admin extends Component {
    constructor(props) {
      super(props);
      this.state = {
        httpMethod: '',
        entity: '',
        payload: {},
        result: {}
      };

      this.handleChange = this.handleChange.bind(this);
      this.handlePayload = this.handlePayload.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.postUser = this.postUser.bind(this);
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
      if(this.state.entity === 'users'){
        if(this.state.httpMethod === 'POST'){
          this.postUser(this.state.payload)
        }
        if(this.state.httpMethod === 'GET'){
          this.getUser(this.state.payload)
        }
        if(this.state.httpMethod === 'PUT'){
          this.updateUser(this.state.payload)
        }
      }
      event.preventDefault();
    }

    postUser(payload){
      fetch('https://gentle-inlet-25364.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      .then((response) => response.json())
      .then((result) => {
        this.setState({result: result})
        console.log('Success:', result);
        console.log(this.state)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    getUser(payload){
      const base = "https://gentle-inlet-25364.herokuapp.com/users/"
      const endpoint = base.concat(payload['userid'])
      fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((result) => {
        this.setState({result: result})
        console.log('Success:', result);
        console.log(this.state)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    updateUser(payload){
      const base = "https://gentle-inlet-25364.herokuapp.com/users/"
      const endpoint = base.concat(payload['userid'])
      fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      .then((response) => response.json())
      .then((result) => {
        this.setState({result: result})
        console.log('Success:', result);
        console.log(this.state)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    render() {
      const CreateUser = (
        <>
        <br/>
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

      const UpdateUser = (
        <>
        <br/>
          <div className="form-group">
              <label htmlFor="name">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  placeholder="Enter the ID you want to update"
                  value={this.state.userid}
                  onChange={this.handlePayload}
                  />
            </div>

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

      const ReadAndDeleteUser = (
        <>
        <br/>
          <div className="form-group">
            <label htmlFor="name">User ID</label>
              <input
                type="text"
                className="form-control"
                name="userid"
                placeholder="User ID"
                value={this.state.userid}
                onChange={this.handlePayload}
                />
          </div>
        </>
      )

      const CreateWorkout = (
        <>
        <br/>
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

      const UpdateWorkout = (
        <>
        <br/>
          <div className="form-group">
              <label htmlFor="name">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  placeholder="Enter the ID you want to update"
                  value={this.state.userid}
                  onChange={this.handlePayload}
                  />
            </div>

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

      const ReadAndDeleteWorkout = (
        <>
        <br/>
          <div className="form-group">
            <label htmlFor="name">Workout ID</label>
              <input
                type="text"
                className="form-control"
                name="wkoutID"
                placeholder="Workout ID"
                value={this.state.wkoutID}
                onChange={this.handlePayload}
                />
          </div>
        </>
      )

      const CreateYTVideo = (
        <>
        <br/>
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

      const UpdateYTVideo = (
        <>
        <br/>
          <div className="form-group">
              <label htmlFor="name">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  placeholder="Enter the ID you want to update"
                  value={this.state.userid}
                  onChange={this.handlePayload}
                  />
            </div>

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

      const ReadAndDeleteYTVideo = (
        <>
        <br/>
          <div className="form-group">
            <label htmlFor="name">User ID</label>
              <input
                type="text"
                className="form-control"
                name="userid"
                placeholder="User ID"
                value={this.state.userid}
                onChange={this.handlePayload}
                />
          </div>
        </>
      )

      const CreateCollab = (
        <>
        <br/>
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

      const UpdateCollab = (
        <>
        <br/>
          <div className="form-group">
              <label htmlFor="name">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  placeholder="Enter the ID you want to update"
                  value={this.state.userid}
                  onChange={this.handlePayload}
                  />
            </div>

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

      const ReadAndDeleteCollab = (
        <>
        <br/>
          <div className="form-group">
            <label htmlFor="name">User ID</label>
              <input
                type="text"
                className="form-control"
                name="userid"
                placeholder="User ID"
                value={this.state.userid}
                onChange={this.handlePayload}
                />
          </div>
        </>
      )

      const CreateMeal = (
        <>
        <br/>
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

      const UpdateMeal = (
        <>
        <br/>
          <div className="form-group">
              <label htmlFor="name">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="userid"
                  placeholder="Enter the ID you want to update"
                  value={this.state.userid}
                  onChange={this.handlePayload}
                  />
            </div>

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

      const ReadAndDeleteMeal = (
        <>
        <br/>
          <div className="form-group">
            <label htmlFor="name">User ID</label>
              <input
                type="text"
                className="form-control"
                name="userid"
                placeholder="User ID"
                value={this.state.userid}
                onChange={this.handlePayload}
                />
          </div>
        </>
      )

      const result = (
        <>
          <hr/>
          <ReactJson src={this.state.result} theme="shapeshifter:inverted" />
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
                            <option value="youtube_videos">Youtube_Video</option>
                            <option value="collabs">Collaborator</option>
                            <option value="meals">Meal</option>
                        </select>
                        </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        {(this.state.httpMethod === "POST") ? (this.state.entity === "users" ? CreateUser : null) : null}
                        {(this.state.httpMethod === "PUT") ? (this.state.entity === "users" ? UpdateUser : null) : null}
                        {(this.state.httpMethod === "GET" || this.state.httpMethod === "DELETE") ? (this.state.entity === "users" ? ReadAndDeleteUser : null) : null}
                      
                        {(this.state.httpMethod === "POST") ? (this.state.entity === "workouts" ? CreateWorkout : null) : null}
                        {(this.state.httpMethod === "PUT") ? (this.state.entity === "workouts" ? UpdateWorkout : null) : null}
                        {(this.state.httpMethod === "GET" || this.state.httpMethod === "DELETE") ? (this.state.entity === "workouts" ? ReadAndDeleteWorkout : null) : null}

                        {(this.state.httpMethod === "POST") ? (this.state.entity === "youtube_videos" ? CreateYTVideo : null) : null}
                        {(this.state.httpMethod === "PUT") ? (this.state.entity === "youtube_videos" ? UpdateYTVideo : null) : null}
                        {(this.state.httpMethod === "GET" || this.state.httpMethod === "DELETE") ? (this.state.entity === "youtube_videos" ? ReadAndDeleteYTVideo : null) : null}

                        {(this.state.httpMethod === "POST") ? (this.state.entity === "collabs" ? CreateCollab : null) : null}
                        {(this.state.httpMethod === "PUT") ? (this.state.entity === "collabs" ? UpdateCollab : null) : null}
                        {(this.state.httpMethod === "GET" || this.state.httpMethod === "DELETE") ? (this.state.entity === "collabs" ? ReadAndDeleteCollab : null) : null}

                        {(this.state.httpMethod === "POST") ? (this.state.entity === "meals" ? CreateMeal : null) : null}
                        {(this.state.httpMethod === "PUT") ? (this.state.entity === "meals" ? UpdateMeal : null) : null}
                        {(this.state.httpMethod === "GET" || this.state.httpMethod === "DELETE") ? (this.state.entity === "meals" ? ReadAndDeleteMeal : null) : null}


                      </div>
                    </div>

                    <center>
                        <button type="submit" className="btn btn-primary button-spacing">Submit</button>
                    </center>

                </form>

                {Object.keys(this.state.result).length !== 0 ? result : null}
            
        </div>
      );
    }
  }

export default Admin