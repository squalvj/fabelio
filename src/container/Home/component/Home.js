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
         periodSelected: '',
         furnitureData: [...multiSelectData]
      };
   }

   handleChange = e => this.setState({
      [e.target.dataset.key]: e.target.value
   })

   handleClickMultiSelect = furnitureKey => {
      const { furnitureData } = this.state;
      const toggledData = furnitureData.map(e => ({...e, selected: furnitureKey === e.key ? !e.selected : e.selected }))
      this.setState({ furnitureData: toggledData });
   }

   render() {
      const { searchValue, periodSelected, furnitureData } = this.state;
      return (
         <div className="container">
            <div className="wrapper-filter padding-15">
               <div className="margin-b-15 col-6">
                  <TextField dataKey="searchValue" placeholder="Search Furniture" onChange={this.handleChange} value={searchValue} />
               </div>
               <div className="flex align-center">
                  <div className="col-6 flex align-center">
                     <MultiSelect placeholder={'Furniture Style'} data={furnitureData} handleClick={this.handleClickMultiSelect} />
                  </div>
                  <div className="col-6 flex align-center padding-l-15">
                     <Dropdown dataKey="periodSelected" option={deliverySelections} onChange={this.handleChange} placeholder="Search..." value={periodSelected} />
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
