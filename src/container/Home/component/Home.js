import React, { Component } from 'react'
import TextField from 'components/TextField';
import ProductCard from 'components/ProductCard';
import MultiSelect from 'components/MultiSelect';
import { getProducts, getProductsStyles } from 'module/Products';
import { get } from 'utils/index'
import './Home.scss'

const deliverySelections = [
   {
      key: 7,
      label: '1 Week',
      selected: false
   },
   {
      key: 14,
      label: '2 Week',
      selected: false
   },
   {
      key: 30,
      label: '1 Month',
      selected: false
   },
   {
      key: 45,
      label: 'More',
      selected: false
   },
]

export default class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchValue: '',
         periodsFilter: [...deliverySelections],
         furnitureStyles: [],
         products: []
      };
   }
   
   componentDidMount() {
      this.getInitialProducts();
      this.getInitialFurnitureStyles();
   }

   getInitialProducts = () => {
      getProducts().then(e => this.setState({products: e})).catch(() => {});
   }

   getInitialFurnitureStyles = () => {
      getProductsStyles().then(e => {
         const restructuredData = (e || []).map(c => ({
            key: c,
            label: c,
            selected: false
         }))
         this.setState({furnitureStyles: restructuredData})
      }).catch(() => {});
   }

   handleChange = e => this.setState({
      [e.target.dataset.key]: e.target.value
   })

   handleClickMultiSelect = furnitureKey => {
      const { furnitureStyles } = this.state;
      const toggledData = furnitureStyles.map(e => ({...e, selected: furnitureKey === e.key ? !e.selected : e.selected }))
      this.setState({ furnitureStyles: toggledData });
   }

   handleClickPeriod = periodKey => {
      const { periodsFilter } = this.state;
      const toggledData = periodsFilter.map(e => ({...e, selected: periodKey === e.key ? !e.selected : e.selected }))
      this.setState({ periodsFilter: toggledData });
   }

   filterName = (arr, searchKey) => arr.filter(e => get(['name'], e, '').toLowerCase().includes(searchKey.toLowerCase()))

   filterStyles = arr => {
      const { furnitureStyles } = this.state;
      const selectedFurnitureStyles = furnitureStyles.filter(e => e.selected).map(e => e.key);

      // prevent redundant operation if no multiselect choosen
      if (selectedFurnitureStyles.length === 0)
         return arr;

      return arr.filter(e => e.furniture_style.some(c => selectedFurnitureStyles.indexOf(c) > -1))
   }

   filterDelivery = arr => {
      const { periodsFilter } = this.state;
      const selectedFurnitureStyles = periodsFilter.filter(e => e.selected).map(e => e.key);
      const totalDays = selectedFurnitureStyles.length > 0 ? selectedFurnitureStyles.reduce((a, b) => a + b) : 45;
      // prevent redundant operation if no multiselect choosen
      // 45 means 1 week + 2 week + 1 month which is unlimited
      if (selectedFurnitureStyles.length === 0 || totalDays > 44)
         return arr;

      return arr.filter(e => e.delivery_time <= totalDays);
   }
   
   render() {
      const { searchValue, furnitureStyles, products, periodsFilter } = this.state;
      const procuctsFilteredBySearch = this.filterName(products, searchValue);
      const procuctsFilteredByStyles = this.filterStyles(procuctsFilteredBySearch);
      const procuctsFilteredByDelivery = this.filterDelivery(procuctsFilteredByStyles);
      const theProducts = procuctsFilteredByDelivery.map((e, i) => 
         <ProductCard 
            productName={e.name}
            productPrice={e.price}
            productDesc={e.description}
            productStyles={e.furniture_style}
            productDelivery={e.delivery_time}
            key={i}
         />
      ) 
      return (
         <div className="container">
            <div className="wrapper-filter padding-15">
               <div className="margin-b-15 col-6 padding-r-6">
                  <TextField dataKey="searchValue" placeholder="Search Furniture" onChange={this.handleChange} value={searchValue} />
               </div>
               <div className="flex align-center">
                  <div className="col-6 flex align-center padding-r-6">
                     <MultiSelect placeholder={'Furniture Style'} data={furnitureStyles} handleClick={this.handleClickMultiSelect} />
                  </div>
                  <div className="col-6 flex align-center padding-l-6">
                  <MultiSelect placeholder={'Delivery Time'} data={periodsFilter} handleClick={this.handleClickPeriod} />
                  </div>
               </div>
            </div>

            <div className="wrapper-list-product padding-15">
               {theProducts}
            </div>
         </div>
      )
   }
}
