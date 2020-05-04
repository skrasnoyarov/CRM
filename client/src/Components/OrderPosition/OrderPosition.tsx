import React, {Component} from 'react';
import FloatingButton from "../FloatingButton";

class OrderPosition extends Component {
	renderContent () {
		return (
			<>
				<main className="content">
					<div className="page-title">
						<h4>
							<a href="#">Заказ</a>
							<i className="material-icons">keyboard_arrow_right</i>
							Добавить продукцию
						</h4>
						<button className="waves-effect btn grey darken-1 modal-trigger" data-target="explore-order">
							Завершить
						</button>
					</div>


					<table className="highlight">
						<thead>
						<tr>
							<th>Название</th>
							<th>Стоимость</th>
							<th>Количество</th>
							<th></th>
						</tr>
						</thead>

						<tbody>
						<tr>
							<td>Coffee</td>
							<td>200 руб.</td>
							<td>
								<div className="input-field inline order-position-input">
									<input type="number" value="1" min="1"/>
								</div>
							</td>
							<td>
								<button className="btn waves-effect wavers-light btn-small">Добавить</button>
							</td>
						</tr>
						<tr>
							<td>Coffee</td>
							<td>200 руб.</td>
							<td>
								<div className="input-field inline order-position-input">
									<input type="number" value="1" min="1"/>
								</div>
							</td>
							<td>
								<button className="btn waves-effect wavers-light btn-small">Добавить</button>
							</td>
						</tr>
						<tr>
							<td>Coffee</td>
							<td>200 руб.</td>
							<td>
								<div className="input-field inline order-position-input">
									<input type="number" value="1" min="1"/>
								</div>
							</td>
							<td>
								<button className="btn waves-effect wavers-light btn-small">Добавить</button>
							</td>
						</tr>
						</tbody>
					</table>
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


	render () {
		return (
			<>
				{this.renderContent()}
				{this.renderExploreOrder()}
				<FloatingButton />
			</>
		)
	}
}

export default OrderPosition;