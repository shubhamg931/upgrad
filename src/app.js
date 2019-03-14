import React, { Component } from 'react'

class App extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      renderView: "",
      renderAdd: "none",
      details: [],
      name: "",
      phone: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }
  renderDetails = () => {
    // console.log("called");
    return(
      this.state.details.map((detail) => {
        return(
          <div className="row">
            <div className="col s4">
              <h6>{detail.name}</h6>
            </div>
            <div className="col s4">
              <h6>{detail.phone}</h6>
            </div>
            <div className="col s4">
              <button className="btn red" onClick={() => {this.deleteSubscriber(detail.name, detail.phone)}}>DELETE</button>
            </div>
          </div>
        )
      })
    );
  }

  deleteSubscriber = (name, phone) => {
    console.log("DELETE: " + name + phone);
    let details = this.state.details;
    for(var i = 0; i < details.length; i++) {
      if(details[i].name === name && details[i].phone === phone) {
        details.splice(i, 1);
        break;
      }
    }
    this.setState({details});
    console.log("AFTER DELETTION:" + JSON.stringify(this.state));
  }

  addSubscriber = () => {
    this.state.details.push({name: this.state.name, phone: this.state.phone});
    // this.setState(this.state);
    this.setState({renderView: "", renderAdd: "none", name: "", phone: ""})
    console.log("subsriber added: " + JSON.stringify(this.state));
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  changeView = () => {
    this.setState({renderView: "none", renderAdd: ""})
  }
  
  goBack = () => {
    this.setState({renderView: "", renderAdd: "none"});
}

  render() {
    return (
      <div>
        <div style={{display: this.state.renderView}}>
          <nav className="center">
            PHONE DIRECTORY
          </nav>
          <br/>
          <div>
            <div className="row">
              <div className="col s12">
                <button className="btn" onClick={() => {this.changeView()}}>
                  ADD
                </button>
              </div>
              <br/><br/>
              <div className="col s12">
                <div className="row">
                  <div className="col s4">
                    NAME
                  </div>
                  <div className="col s4">
                    PHONE
                  </div>
                  <div className="col s4">
                  </div>
                </div>
              </div>
              <div className="col s12">
                {this.renderDetails()}
              </div>
            </div>
          </div>
        </div>

        <div style={{display: this.state.renderAdd}}>
          <nav className="center">
            ADD SUBSCRIBER
          </nav>
          <br/>
          <div>
            <div className="row">
              <div className="col s12">
                <button className="btn" onClick={() => {this.goBack()}}>
                  BACK
                </button>
              </div>
              <br/><br/>
              <div className="input-field col s12">
                <input id="name" type="text" onChange={this.handleNameChange} value={this.state.name} className="validate" />
                <label className="active" htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input id="phone" type="text" onChange={this.handlePhoneChange} value={this.state.phone} className="validate" />
                <label className="active" htmlFor="phone">Phone</label>
              </div>
              <div className="col s12">
                <h6 style={{fontWeight: 700}}>Subscriber to be added</h6>
                <p>Name: {this.state.name}</p>
                <p>Phone: {this.state.phone}</p>
              </div>
              <div className="col s12">
                <button className="btn" onClick={() => {this.addSubscriber()}}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
