import React from "react";

class PositionForm extends React.Component {
	render(): React.ReactNode {
		return (
			<>
				<div id="create-modal" className="modal">
					<div className="modal-content">
						<h4 className="mb1">Добавить позицию</h4>
						<div className="input-field">
							<input id="pos-name" type="text" required/>
							<label htmlFor="pos-name">Название</label>
						</div>
						<div className="input-field">
							<input id="pos-cost" type="text" required/>
							<label htmlFor="pos-cost">Цена</label>
						</div>
					</div>
					<div className="modal-footer">
						<a href="#!" className="modal-action waves-effect waves-black btn-flat">Отмена</a>
						<button className="modal-action btn waves-effect">Сохранить</button>
					</div>
				</div>
			</>
		)
	}
}

export default PositionForm;