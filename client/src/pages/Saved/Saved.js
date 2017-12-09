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
						<FormContainer title="Saved Articles" icon="fa fa-table" id="saved-articles">
						</FormContainer>
					</Col>
				</Row>
			</Container>

		);
	}
}

export default Search;