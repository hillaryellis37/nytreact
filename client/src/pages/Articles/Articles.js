import React, { Component } from "react";
import {Row, Col, Container} from "../../components/Main";
import Jumbotron from "../../components/Jumbotron";

class Articles extends Component {

	render() {
		return (
			<Container fluid>
				<Jumbotron>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</Jumbotron>
				<Row>
					<Col size="md-12">
					</Col>
				</Row>
			</Container>

		);
	}
}

export default Articles;


