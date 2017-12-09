import React, { Component } from "react";
import API from "../../utils/API";
import {Row, Col, Container} from "../../components/Grid";
import { Input, FormBtn, SaveBtn, FormContainer } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

let articleCounter = 1;

class Search extends Component {

	state = {
		search: "",
		startYear: "",
		endYear: "",
		articles: [],
		title: "",
		link: "",
		articleKey: "",
		error: ""

	};

	handleInputChange = event => {
		const { name, value} = event.target;
		this.setState({ 
			[name]: value
		});
	};

	handleFormSubmit = event => {
		articleCounter = 1;
		event.preventDefault();

		API.getArticles(this.state.search)
			.then(res => {
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				this.setState({ articles: res.data.response.docs, error: "" });
				console.log(this.state.articles);

			})
			.catch(err => this.setState({ error: err.message }));
	};

	saveArticle = (id) => {
		console.log(id);



	};




	render() {
		return (
			<Container>
				<Jumbotron>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</Jumbotron>
				<Row>
					<Col size="md-12">
						<FormContainer 
							title="Search Parmeters" 
							icon="fa fa-newspaper-o"
						>
							<Input 
								for="search" 
								value={this.state.search}
								id="search-term"
								onChange={this.handleInputChange}
								name="search"
							>
							Search Term:
							</Input>
							<Input 
								for="start-year" 
								value={this.state.startYear}
								id="start-year"
								onChange={this.handleInputChange}
								name="startYear"
							>
							Start Year (Optional):
							</Input>
							<Input 
								for="end-year" 
								value={this.state.endYear}
								id="end-year"
								onChange={this.handleInputChange}
								name="endYear"
							>
							End Year (Optional):
							</Input>
							<FormBtn
								handleFormSubmit={this.handleFormSubmit}
							>
							Submit</FormBtn>
						</FormContainer>
					</Col>
				</Row>		
				<Row>
					<Col size="md-12">
						<FormContainer title="Results" icon="fa fa-table" id="results-articles">
							{this.state.articles.map(article => (
								<div className="row well" key={article._id}>
									<Col size="md-10">	
										<h3 className='articleHeadline'>
											<span className='label label-primary'>{articleCounter++}</span>
											<strong>{article.headline.main}</strong>
										</h3>
									</Col>
									<Col size="md-2">
										<SaveBtn onClick={() => this.saveArticle(article._id)}/>	
									</Col>
								</div>
							))} 

						</FormContainer>
					</Col>
				</Row>

			</Container>

		);
	}
}

export default Search;


