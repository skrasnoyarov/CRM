import React, {Component} from 'react';
import FloatingButton from "../FloatingButton";

class History extends Component {
	renderContent () {
		return (
			<>
				<main className="content">
					<div className="page-title">
						<h4>История заказов</h4>
						<button className="btn btn-small js-filter tooltipped" data-tooltip="Открыть фильтр">
							<i className="material-icons">filter_list</i>
						</button>
					</div>

					<div className="filter js-filter-block hide">
						<div className="fr">
							<div className="col order">
								<div className="input-field inline order-position-input">
									<input type="number" id="number" min="1" />
										<label htmlFor="number">Номер заказа</label>
								</div>
							</div>
							<div className="col filter-pickers">
								<div className="input-field">
									<input type="text" className="datepicker" />
										<label>Начало</label>
								</div>

								<div className="input-field">
									<input type="text" className="datepicker" />
										<label>Конец</label>
								</div>
							</div>
						</div>

						<button className="btn waves-effect wavers-light btn-small">Применить фильтр</button>
					</div>


					<table className="highlight mb2">
						<thead>
						<tr>
							<th>№</th>
							<th>Дата</th>
							<th>Время</th>
							<th>Сумма</th>
						</tr>
						</thead>

						<tbody>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small modal-trigger grey darken-1" data-target="order-list">
									<i className="material-icons">open_in_new</i>
								</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>21.12.2000</td>
							<td>14:21</td>
							<td>12 211 руб.</td>
							<td>
								<button className="btn btn-small grey darken-1"><i
									className="material-icons">open_in_new</i></button>
							</td>
						</tr>
						</tbody>
					</table>

					<div className="center mb2">
						<button className="btn waves-effect grey darken-1 btn-small">Загрузить еще</button>
					</div>

				</main>
			</>
		)
	}

	renderOrderList () {
		return (
			<>
				<div id="order-list" className="modal modal-fixed-footer">
					<div className="modal-content">
						<h4 className="mb1">Заказ №5</h4>
						<table className="highlight">
							<thead>
							<tr>
								<th>Название</th>
								<th>Количество</th>
								<th>Цена</th>
							</tr>
							</thead>

							<tbody>
							<tr>
								<td>Alvin</td>
								<td>3</td>
								<td>$0.87</td>
							</tr>
							</tbody>
						</table>
						<div className="order-summary">
							<p>Общая стоимость <strong>22 231 руб.</strong></p>
						</div>
					</div>
					<div className="modal-footer">
						<button className="modal-action waves-effect waves-black btn-flat">Закрыть</button>
					</div>
				</div>
			</>
		)
	}

	render () {
		return (
			<>
				{this.renderContent()}
				{this.renderOrderList()}
				<FloatingButton />
			</>
		)
	}
}

export default History;