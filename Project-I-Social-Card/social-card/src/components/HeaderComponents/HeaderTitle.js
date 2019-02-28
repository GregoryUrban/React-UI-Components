import React from 'react';
import './Header.css';
import moment from 'moment';
// import moment from 'react-datetime';
// import 'moment-timezone';


const HeaderTitle = () => (
  <div className="title">
    <h4>
    Lambda School
    </h4>
    
    <span>@lambdaSchool - {moment().format("D MMM")} </span>

  </div>
);

export default HeaderTitle;
// console.log(moment().format("MM ddd, YYYY hh:mm:ss a"));