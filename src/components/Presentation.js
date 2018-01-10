import React, { Component } from 'react';
import { Card ,CardSubtitle, CardBody } from 'reactstrap';

class Presentation extends Component {

  GetHeroSkillsImage(skill){
    var Image = '';
    switch(skill){
      case "HTML":
        Image = require('../images/development/html.png')
      break;

      case "CSS":
        Image =require('../images/development/css.png')
      break;

      case "JS":
        Image =require('../images/development/js.png')
      break;

      case "PHP":
        Image =require('../images/development/php.png')
      break;

      case "OOP":
        Image =require('../images/development/oop.png')
      break;

      case "Android":
        Image =require('../images/development/android.png')
      break;

      case "IOS":
        Image =require('../images/development/ios.png')
      break;

      default:
        Image =require('../images/development/html.png')
      break;
    }

    return Image;
  }

  render() {
    let Hero = this.props.data;
    let HeroWeapons = Hero.skills ? Hero.skills : [];
    return (
       <div className="col-6">
         <Card style={{marginBottom: "1em", minHeight: "500px"}}>
           <CardBody className="presentation-dock">

              <div className="row">
                <div className="col-10">
                  <h2>{Hero.name}</h2>
                  <img src={Hero.avatar} alt={Hero.name} title={Hero.name} className="avatar-presentation" />
                  <CardSubtitle>{Hero.skill}</CardSubtitle>
                </div>
                <div className="col" skills={HeroWeapons}>
                {
                  HeroWeapons.map((skill) => {
                      return <img src={this.GetHeroSkillsImage(skill)} alt={skill} title={skill} className="weapons" />
                  })
                }
                </div>
              </div>
           </CardBody>
         </Card>
       </div>
    );
  }
}

export default Presentation;
