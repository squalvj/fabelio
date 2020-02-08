import React, { Component } from 'react'
import TextField from 'components/TextField';
import './Home.scss'

export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchValue: ''
      };
   }

   render() {
      const { searchVal } = this.state;
      return (
         <div className="container">
            <div className="wrapper-filter padding-15">
               <div className="margin-b-15 col-6">
                  <TextField placeholder="Search Furniture" onChange={e => this.setState({searchVal: e.target.value})} value={searchVal} />
               </div>
               <div className="flex">
                  <div className="col-6">
                     <TextField placeholder="Search..." value={searchVal} />
                  </div>
                  <div className="col-6 padding-l-15">
                     <TextField placeholder="Search..." value={searchVal} />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
