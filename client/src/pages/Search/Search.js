import React, { Component } from "react";
import API from "../../utils/API";
import {Row, Col, Container} from "../../components/Grid";
import { Input, FormBtn, FormContainer } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";


let numResults = 0;
let startYear = 0;
let endYear = 0;


class Search extends Component {

	state = {
		search: "",
		startYear: "",
		endYear: "",
		articles: [],
		error: ""

	};

	handleInputChange = event => {
		const { name, value} = event.target;
		this.setState({ [name]: value
		});
	};

	handleFormSubmit = event => {
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
								<div class="well" key="article._id">	
									<h3 class='articleHeadline'>
										<strong>{article.headline.main}</strong>
									</h3>	
									<h5>Section: {article.section_name}</h5>
									<h5>{article.pub_date}</h5>
									<a hfref={article.web_url}>{article.web_url}</a>
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


