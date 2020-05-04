import React, {Component} from 'react';
import FloatingButton from "../FloatingButton";

class Order extends Component {
	renderContent () {
		return (
			<>
				<main className="content">
					<div className="page-title">
						<h4>Заказ</h4>
						<button className="waves-effect btn grey darken-1 modal-trigger" data-target="explore-order">
							Завершить
						</button>
					</div>


					<div className="frow order-row">
						<div className="card waves-effect pointer">
							<div className="center">
								{/*<img src="cake.jpg" className="responsive-img order-img">*/}
							</div>
							<div className="card-content center p10">
								<h5 className="m0">Название категории</h5>
							</div>
						</div>
						<div className="card waves-effect pointer">
							<div className="center">
								{/*<img src="cake.jpg" className="responsive-img order-img">*/}
							</div>
							<div className="card-content center p10">
								<h5 className="m0">Название категории</h5>
							</div>
						</div>
						<div className="card waves-effect pointer">
							<div className="center">
								{/*<img src="cake.jpg" className="responsive-img order-img">*/}
							</div>
							<div className="card-content center p10">
								<h5 className="m0">Название категории</h5>
							</div>
						</div>
						<div className="card waves-effect pointer">
							<div className="center">
								{/*<img src="cake.jpg" className="responsive-img order-img">*/}
							</div>
							<div className="card-content center p10">
								<h5 className="m0">Название категории</h5>
							</div>
						</div>
						<div className="card waves-effect pointer">
							<div className="center">
								{/*<img src="cake.jpg" className="responsive-img order-img">*/}
							</div>
							<div className="card-content center p10">
								<h5 className="m0">Название категории</h5>
							</div>
						</div>
					</div>

				</main>
			</>
		)
	}

	renderExploreOrder () {
		return (
			<>
				<div id="explore-order" className="modal modal-fixed-footer">
					<div className="modal-content">
						<h4 className="mb1">Ваш заказ</h4>
						<table className="highlight">
							<thead>
							<tr>
								<th>Название</th>
								<th>Количество</th>
								<th>Цена</th>
								<th></th>
							</tr>
							</thead>

							<tbody>
							<tr>
								<td>Alvin</td>
								<td>3</td>
								<td>$0.87</td>
								<td><i className="material-icons pointer">delete</i></td>
							</tr>
							<tr>
								<td>Alan</td>
								<td>1</td>
								<td>$3.76</td>
								<td><i className="material-icons pointer">delete</i></td>

							</tr>
							<tr>
								<td>Jonathan</td>
								<td>2</td>
								<td>$7.00</td>
								<td><i className="material-icons pointer">delete</i></td>
							</tr>
							</tbody>
						</table>
						<div className="order-summary">
							<p>Общая стоимость <strong>22 231 руб.</strong></p>
						</div>
					</div>
					<div className="modal-footer">
						<a href="#!" className="modal-action waves-effect waves-black btn-flat">Отмена</a>
						<button className="modal-action btn waves-effect">Подтвердить</button>
					</div>
				</div>
			</>
		)
	}


	render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
		return (
			<>
				{this.renderContent()}
				{this.renderExploreOrder()}
				<FloatingButton />
			</>
		)
	}
}

export default Order;