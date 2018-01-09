import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

class Presentation extends Component {

  GetHeroSkillsImage(skill){
    var Image = '';
    switch(skill){
      case "HTML":
        Image = require('../images/weapons/white-book.png')
      break;

      case "CSS":
        Image =require('../images/weapons/orb-wand.png')
      break;

      case "JS":
        Image =require('../images/weapons/chain-lightning.png')
      break;

      case "PHP":
        Image =require('../images/weapons/black-book.png')
      break;

      case "OOP":
        Image =require('../images/weapons/gold-bar.png')
      break;

      case "Android":
        Image =require('../images/weapons/chain-mail.png')
      break;

      case "IOS":
        Image =require('../images/weapons/round-shield.png')
      break;

      default:
        Image =require('../images/weapons/round-shield.png')
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
                  <CardTitle>{Hero.name}</CardTitle>
                  <img src={Hero.avatar} alt={Hero.name} title={Hero.name} className="avatar-presentation" />
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
