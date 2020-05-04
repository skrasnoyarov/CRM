import {bindActionCreators, Dispatch} from "redux";
import cn from 'classnames';
import {connect} from 'react-redux';
import FloatingButton from '../FloatingButton';
import loader from '../Loader'
import {Link} from 'react-router-dom';
import {getAllCategoriesData} from '../../actions/category';
import React, {Component} from 'react';
import 'materialize-css/dist/js/materialize';
import {Props, State} from "./types";

class Categories extends Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = {
			activeCategory: 0
		}
	}

	componentDidMount (): void {
		const {getAllCategories} = this.props;
		getAllCategories && getAllCategories();
	}

	renderCategory () {
		const {categories} = this.props;

		if (categories.length) {
			return categories.map((category: any, index: number) => {
				const {activeCategory} = this.state;
				const styles = cn({
					"active": index === activeCategory,
					"collection-item": true
				});

				return <Link key={index} className={styles} to={`/category/${category._id}`} onClick={() => this.setState({activeCategory: index})}>{category.name}</Link>
			})
		}

		return <div>Категорий нет!</div>
	}

	renderContent () {
		const {loading} = this.props;

		return (
			<>
				<main className="content">
					<div className="page-title">
						<h4>Категории</h4>
						<Link className="waves-effect waves-light btn grey darken-1" to="/addCategory">Добавить категорию</Link>
					</div>

					{loading ?
						<div className="row">
						<div className="col s12">
							<div className="collection">
								{this.renderCategory()}
							</div>
						</div>
					</div> : loader()}


				</main>
			</>
		)
	}

	render () {
		return (
			<>
				{this.renderContent()}
				<FloatingButton />
			</>
		)
	}
}

const props = (state: any) => ({
	categories: state.PagesReducer.categories,
	loading: state.PagesReducer.loading
});

const functions = (dispatch: Dispatch) => bindActionCreators({
	getAllCategories: getAllCategoriesData
}, dispatch);

export default connect(props, functions)(Categories);