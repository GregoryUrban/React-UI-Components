import React from 'react';
import './Header.css';
import moment from 'moment';
// import moment from 'react-datetime';
// import 'moment-timezone';


const HeaderTitle = () => (
  <div className="title">
    <h4>Lambda School</h4>
    <span>@LambdaSchool - {moment().format("D MMM")} </span>
  </div>
);

export default HeaderTitle