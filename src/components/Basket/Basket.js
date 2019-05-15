import React from 'react';
import { Redirect } from 'react-router-dom';
import './Basket.css';

class Basket extends React.Component {
  state = {
		redirect: false
	};

	componentDidMount(){
		this.setState({
			basketProducts: JSON.parse(localStorage.getItem('basketProducts')),
		})
	}

	getProductsFromLS = () => {
		return JSON.parse(localStorage.getItem('basketProducts'))
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		})
	}

	renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/summary-order' />
    }
	}
	
  render() { 
    return ( 
			<div className="basket__container">
				<h1>Basket</h1>
				<div className="basket__container__header">
					<div className="basket__container__header1">
						<span>Product</span>
					</div>
					<div className="basket__container__header2">
						<span>Qty</span>
					</div>
					<div className="basket__container__header3">
						<span>Price</span>
					</div>
				</div>
				<div className="basket__container__table">
					<table>
						<tbody>
							{this.state.basketProducts ?
								this.state.basketProducts.map((product) => {
									return (
										<tr key={product.title}>
												<td className="td1">
													<span className="basket__delete__product" 
														onClick={() => {
															let basketProducts = this.state.basketProducts.filter(
																basketProduct => basketProduct.id !== product.id
															)
															localStorage.setItem('basketProducts', JSON.stringify(basketProducts)) 
															this.setState({basketProducts}) 
														}}>
														✘
													</span>
													{product.title}
												</td>
												<td className="table__center__content td2">
													<span 
														className="basket__product__quantity__button" 
														id={ `${product.id}--` }
														onClick={() => {
															if (document.getElementById(`${product.id}qty`).innerHTML > 1) {
																product.qty--
																this.setState({})
														}}}
													>
														-
													</span>
													<span 
														className="basket__product__quantity" 
														id={ `${product.id}qty` }
													>
														{product.qty}
													</span>
													<span 
														className="basket__product__quantity__button" 
														id={ `${product.id}++` }
														onClick={() => {
															product.qty++
															this.setState({})
														}}
													>
														+
													</span>
												</td>
												<td className="table__center__content td3">
													$ {(product.price * product.qty).toFixed(2)}
												</td>
										</tr>
									)
								})
								: null
							}
						</tbody>
					</table>
				</div>
				<div className="basket__container__summary">
					<span>
						Total:&nbsp;&nbsp;&nbsp;
							{this.state.basketProducts 
								? ' $' + this.state.basketProducts
											.map(basketProduct => basketProduct.price * basketProduct.qty)
											.reduce((a,b) => a + b, 0)
											.toFixed(2)
								: ' $ 0.00'}
					</span>
				</div>
				<div className="basket__container__button">
					{this.renderRedirect()}
					<span onClick={this.setRedirect}>Summary the order</span>
				</div>
      </div>
    );
  }
}
 
export default Basket;