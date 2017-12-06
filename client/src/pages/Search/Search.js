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
		this.setState({ search: event.target.value });
	};

	handleFormSubmit = event => {
		event.preventDefault();
		console.log(this.state.search);
		API.getArticles(this.state.search)
			.then(res => {
				console.log(res.data.response);
				if (res.data.status === "error") {
					throw new Error(res.data.message);
				}
				this.setState({ articles: res.data.message, error: "" });
				

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
								id="search-term"
								handleInputChange={this.handleInputChange}
							>
							Search Term:
							</Input>
							<Input for="start-year" id="start-year">
								Start Year (Optional):
							</Input>
							<Input for="end-year" id="end-year">
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

						</FormContainer>
					</Col>
				</Row>
				<Row>
					<Col size="md-12">
						<FormContainer title="Saved Articles" icon="fa fa-table" id="saved-articles">
						</FormContainer>
					</Col>
				</Row>
			</Container>

		);
	}
}

export default Search;


