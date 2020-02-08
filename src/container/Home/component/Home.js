import React, { Component } from 'react'
import TextField from 'components/TextField';
import Dropdown from 'components/Dropdown';
import MultiSelect from 'components/MultiSelect';
import './Home.scss'

const deliverySelections = [
   {
      value: '1w',
      label: '1 Week'
   },
   {
      value: '2w',
      label: '2 Week'
   },
   {
      value: '3w',
      label: '3 Week'
   },
]

const multiSelectData = [
   {
      key: 'Contemporary',
      label: 'Contemporary',
      selected: false
   },
   {
      key: 'Classic',
      label: 'Classic',
      selected: false
   },
]

export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchValue: '',
         periodSelected: ''
      };
   }

   handleChange = e => this.setState({
      [e.target.dataset.key]: e.target.value
   })

   handleClickMultiSelect = e => {
      console.log({e})
   }

   render() {
      const { searchValue, periodSelected } = this.state;
      return (
         <div className="container">
            <div className="wrapper-filter padding-15">
               <div className="margin-b-15 col-6">
                  <TextField dataKey="searchValue" placeholder="Search Furniture" onChange={this.handleChange} value={searchValue} />
               </div>
               <div className="flex">
                  <div className="col-6">
                     <MultiSelect data={multiSelectData} handleClick={this.handleClickMultiSelect} />
                  </div>
                  <div className="col-6 padding-l-15">
                     <Dropdown dataKey="periodSelected" option={deliverySelections} onChange={this.handleChange} placeholder="Search..." value={periodSelected} />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
