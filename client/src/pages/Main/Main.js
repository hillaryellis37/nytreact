import React, { Component } from "react";
import {Row, Col, Container} from "../../components/Grid";
import { Input, FormBtn, FormContainer } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

class Search extends Component {

	render() {
		return (
			<Container>
				<Jumbotron>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</Jumbotron>
				<Row>
					<Col size="md-12">
						<FormContainer title="Search Parmeters" icon="fa fa-newspaper-o">
							<Input for="search" id="search-term">
								Search Term:
							</Input>
							<Input for="start-year" id="start-year">
								Start Year (Optional):
							</Input>
							<Input for="end-year" id="end-year">
								End Year (Optional):
							</Input>
							<FormBtn>Submit</FormBtn>
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