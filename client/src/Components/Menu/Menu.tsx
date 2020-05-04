import cn from 'classnames';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeLink: 0
		}
	}

	componentDidMount() {
		const activeLink = +localStorage.getItem('activeLink');
		this.setState({activeLink})
	}

	handleClickLink (index) {
		this.setState({
			activeLink: index
		});

		localStorage.setItem('page', window.location.pathname);
		localStorage.setItem('activeLink', index);
	};

	renderLink () {
		const {activeLink} = this.state;

		const links = [
			{title: 'Обзор', to: '/overview'},
			{title: 'Аналитика', to: '/analytics'},
			{title: 'История', to: '/history'},
			{title: 'Добавить заказ', to: '/order'},
			{title: 'Ассортимент', to: '/categories'},
			{title: 'Выйти', to: '/login'}
		];

		return links.map((link, index) => {
			const classNameList = cn({
				"active": activeLink === index,
				"bold": true,
				"last": index === links.length - 1
			});

			return <li key={index} className={classNameList} onClick={() => this.handleClickLink(index)}>
				<Link to={link.to} className="waves-effect waves-orange">{link.title}</Link>
			</li>
		});
	}

	render () {
		return (
			<ul className="sidenav sidenav-fixed a-sidenav">
				<h4>Newborn</h4>
				{this.renderLink()}
			</ul>
		)
	}
}

export default Menu;