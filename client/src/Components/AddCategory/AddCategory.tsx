import cn from 'classnames';
import {connect} from 'react-redux';
import {changeCategoryById, createNewCategory, getCategoryById} from '../../actions/category';
import FloatingButton from '../FloatingButton';
import React, {Component} from 'react';
import {bindActionCreators, Dispatch} from "redux";
import PositionForm from "../PositionForm";
import {Link} from "react-router-dom";
import './AddCategory.css';
import {Props, State} from "./types";
import {promises} from "fs";

class AddCategory extends Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = {
			name: '',
			isNew: true,
			valid: true,
			id: '',
			image: {
				file: {},
				src: ''
			}
		}
	}

	componentDidMount(): void {
		const {categories} = this.props;
		const {pathname} = window.location;
		if (pathname.startsWith('/category')) {
			const id = pathname.split('/')[2];
			const category = categories.find((category: any) => category._id === id);
			this.setState({isNew: false, name: category.name, id})
		}
	}

	createCategory = () => {
		const {changeCategoryById, createNewCategory} = this.props;
		const {id, image, isNew, name} = this.state;
		if (name.trim()) {
			const data = {name, image};
			debugger;
			if (isNew) {
				createNewCategory && createNewCategory(data);
			} else {
				console.log(data)
				changeCategoryById && changeCategoryById(data, id);
			}
		} else {
			this.setState({
				valid: false
			})
		}
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.currentTarget;

		if (!value) {
			this.setState({valid: false, name: ''})
		} else {
			this.setState({
				name: value,
				valid: true
			})
		}
	};

	uploadFile = (event: any) => {
		const file = event.target.files[0];
		console.log(file, 'file');
		const reader = new FileReader();

		reader.onload = () => {
			this.setState({image: {
					file: file,
					src: reader.result || ''
			}})
		};

		reader.readAsDataURL(file);
	};

	renderError () {
		const {valid} = this.state;
		return !valid ? <span className="helper-text red-text">Данное поле не может быть пустым</span> : null;
	}

	renderContent () {
		const {image, isNew, name, valid} = this.state;
		const inputClassName = cn({
			"invalid": !valid
		})

		const labelClassname = cn({
			"active": !!name
		})

		return (
			<>
				<main className="content">
					<div className="page-title">
						<h4>
							<Link to="/categories">Категории</Link>
							<i className="material-icons"> > </i>
							{isNew ? 'Добавить' : 'Редактировать'}  категорию
						</h4>
						<span>
            				<button className="btn btn-small red">
              					<i className="material-icons">delete</i>
            				</button>
          				</span>
					</div>

					<div className="row">
						<div className="col s12 l6">
							<div className="input-field">
								<input id="name" type="text" className={inputClassName} value={this.state.name} onChange={this.handleChange} />
								<label htmlFor="name" className={labelClassname}>Название</label>
								{this.renderError()}
							</div>
							<div>
								<input id="uploadFile" type="file" onChange={this.uploadFile}/>

									<button className="waves-effect waves-light btn orange lighten-2 mb2">
										<label htmlFor="uploadFile" className="uploadLabel">
											<i className="material-icons left">backup</i>
											Загрузить изображение
										</label>
									</button>

							</div>

							<div>
								<button className="waves-effect waves-light btn" onClick={this.createCategory} disabled={!valid}>
									Сохранить изменения
								</button>
							</div>
						</div>

						<div className="col s12 l4 center">
							<img className="responsive-img categoryImage" src={image.src} />
						</div>
					</div>

					<div className="row">
						<div className="col s12">
							<div className="page-subtitle">
								<h4>Позиции:</h4>
								<button className="waves-effect waves-light btn grey darken-1 btn-small modal-trigger"
										data-target="create-modal">
									Добавить позицию
								</button>
							</div>

							<div className="collection">
								<a className="collection-item collection-item-icon">
                    				<span>
										Кофе <strong>20 руб.</strong>
                    				</span>
									<span>
                        				<i className="material-icons">delete</i>
                    				</span>
								</a>
							</div>
						</div>
					</div>
				</main>
			</>
		)
	}

	render () {
		return (
			<>
				{this.renderContent()}
				<PositionForm />
				<FloatingButton />
			</>
		)
	}
}

const props = (state: any) => ({
	categories: state.PagesReducer.categories
});

const functions = (dispatch: Dispatch) => bindActionCreators({
	getCategoryById,
	changeCategoryById,
	createNewCategory
}, dispatch);

export default connect(props, functions)(AddCategory);