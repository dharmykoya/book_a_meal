import React from 'react';
import Caterer from './Caterer/Caterer';
import MrBiggs from '../../assets/images/mr_bigs.jpg';
import Mavise from '../../assets/images/mavise.jpg';
import JesusEmbassey from '../../assets/images/mavise.jpg';
import SweetSensation from '../../assets/images/sweet.png';
import KFC from '../../assets/images/kfc.png';
import Glamours from '../../assets/images/glam.jpg';
import classes from './SelectCaterer.css';


const selectCaterer = () => (
  <div className={classes.selectCaterer}>
    <h2>Select a Restaurant</h2>
    
    <div className={classes.catererContainer}>
      <Caterer link="something.com" imageLink={MrBiggs} time="25 - 30 mins">
        Mr Biggs
      </Caterer>
      <Caterer link="something.com" imageLink={Glamours} time="25 - 30 mins">
        Glamour's rare bite
      </Caterer>
      <Caterer link="something.com" imageLink={KFC} time="25 - 30 mins">
        KFC
      </Caterer>
      <Caterer link="something.com" imageLink={Mavise} time="25 - 30 mins">
        Mavise
      </Caterer>
      <Caterer link="something.com" imageLink={SweetSensation} time="25 - 30 mins">
        Sweet Sensation
      </Caterer>
      <Caterer link="something.com" imageLink={JesusEmbassey} time="25 - 30 mins">
        Jesus Embassey
      </Caterer>
    </div>
  </div>
);

export default selectCaterer;