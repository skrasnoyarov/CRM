import React, {Component} from 'react';

class FloatingButton extends Component {
	render () {
		return (
			<>
				<div className="fixed-action-btn">
					<a className="btn-floating btn-large red">
						<i className="large material-icons">add</i>
					</a>
					<ul>
						<li><a className="btn-floating green"><i className="material-icons">assignment</i></a></li>
						<li><a className="btn-floating blue"><i className="material-icons">list</i></a></li>
					</ul>
				</div>
			</>
		)
	}
}

export default FloatingButton;