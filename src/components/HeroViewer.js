import React, { Component } from 'react';
import { Button, Card, CardTitle, CardBody } from 'reactstrap';

import Presentation from './Presentation';
import Attributes from './Attributes';

class HeroViewer extends Component {

  state = {
    departments: this.props.data.departments,
    teams: [],
    heroes: [],
    hero: false
  }

  GetFilteredCodes = (poolArray,key,val) => {
    return poolArray.filter(function(item,ind){
        return item[key]===val;
    })
  }

  DepartmentClick = (key, value) => {
    var data = this.props.data.teams;
    var teams = this.GetFilteredCodes(data, key, value);

    this.setState({
      teams: teams,
      heroes: [],
      hero: false
    });

    // <Card style={{marginBottom: "1em"}}>
    //   <CardBody>
    //      <CardTitle>Departments</CardTitle>
    //      {
    //        this.state.departments.map((department, key) => {
    //            return <Button outline size="sm" color="secondary" onClick={() => this.DepartmentClick('dept', department.id)}  style={{margin:"2px"}}>{department.name}</Button>
    //        })
    //      }
    //   </CardBody>
    // </Card>
  }

  componentDidMount() {
    window.addEventListener('load', this.DepartmentClick('dept', 'CT'));
 }



  TeamClick = (key, value) => {
    var data = this.props.data.heroes;
    var heroes = this.GetFilteredCodes(data, key, value);

    this.setState({
      heroes: heroes,
      hero: false
    });
  }

  HeroClick = (key, value) => {
    var data = this.props.data.heroes;
    var hero = this.GetFilteredCodes(data, key, value);

    this.setState({
      hero: hero[0]
    });

  }


  render() {
    return (
      <div className="row hero-viewer">
       <div className="col">

          <Card style={{marginBottom: "1em"}}>
            <CardBody>
               <CardTitle>Teams</CardTitle>
               {
                 this.state.teams.map((team, key) => {
                     return <Button outline size="sm" color="info" onClick={() => this.TeamClick('team', team.id)} style={{margin:"2px"}}>{team.shortname}</Button>
                 })
               }
            </CardBody>
          </Card>
          <Card style={{marginBottom: "1em"}}>
            <CardBody>
               <CardTitle>Heroes</CardTitle>
               {
                 this.state.heroes.map((hero, key) => {
                     return <img onClick={() => this.HeroClick('id', hero.id)} src={hero.avatar} alt={hero.name} title={hero.name} className="avatar" />
                 })
               }
            </CardBody>
          </Card>
       </div>
       <Presentation data={this.state.hero}/>
       <Attributes data={this.state.hero} />

    </div>
    );
  }
}


export default HeroViewer;
