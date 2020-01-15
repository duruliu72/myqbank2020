import React, { Component } from "react";
import serviceiconUrl from "../image/img/service/seviceicon.jpg";
class Service extends Component {
  servicesCat = [
    { catid: 0, category: "All" },
    { catid: 1, category: "Upcomming" },
    { catid: 2, category: "ADMISSTION" },
    { catid: 3, category: "BANK" },
    { catid: 4, category: "BCS" },
    { catid: 5, category: "GOVT JOB" },
    { catid: 6, category: "NON GOVT JOB" },
    { catid: 7, category: "PRIMARY TEACHER" }
  ];
  services = [
    { serviceid: 1, catid: 1, serviceName: "Admission Test" },
    { serviceid: 2, catid: 3, serviceName: "BCS" },
    { serviceid: 3, catid: 2, serviceName: "Bank" },
    { serviceid: 4, catid: 1, serviceName: "GOVT JOG" },
    { serviceid: 5, catid: 5, serviceName: "NON GOVT JOG" },
    { serviceid: 6, catid: 7, serviceName: "NTRCA" },
    { serviceid: 7, catid: 1, serviceName: "DEFENCE" },
    { serviceid: 8, catid: 2, serviceName: "BAR COUNCIL" },
    { serviceid: 9, catid: 5, serviceName: "RAILWAY" },
    { serviceid: 10, catid: 1, serviceName: "BAR COUNCIL" },
    { serviceid: 11, catid: 6, serviceName: "Bank" },
    { serviceid: 12, catid: 4, serviceName: "RAILWAY" }
  ];
  constructor(props) {
    super(props);
    this.state = {
      services: this.services
    };
  }
  filterMethod(cat) {
    var tempservices = this.services;
    if (cat.catid !== 0) {
      tempservices = this.services.filter(service => {
        return service.catid === cat.catid;
      });
    }
    this.setState({
      services: tempservices
    });
  }
  componentDidMount() { }
  state = {};
  render() {
    return (
      <section className="myqb-service page-section" id="exam">
        <div className="wrapper">
          <h2 className="headline headline--centred">Select your Exam</h2>
          <div className="service-filter">
            <ul>
              {this.servicesCat.map(cat => (
                <li
                  key={cat.catid}
                  onClick={() => {
                    this.filterMethod(cat);
                  }}
                >
                  {cat.category}
                </li>
              ))}
            </ul>
          </div>
          <div className="servics">
            {this.state.services.map(sevice => (
              <div key={sevice.serviceid} className="service-item">
                <a href="g">
                  <img src={serviceiconUrl} alt="" />{" "}
                  <span>{sevice.serviceName}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
