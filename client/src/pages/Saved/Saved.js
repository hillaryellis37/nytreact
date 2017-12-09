import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import {Row, Col, Container} from "../../components/Grid";
import { Input, FormBtn, SaveBtn, DelBtn, FormContainer } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";

let articleCounter = 1;

class Saved extends Component {

	state = {
		savedArticles: [],
		error: ""

	};

componentDidMount() {
    	this.loadSavedArticles();
  	}

  	loadSavedArticles = () => {
  		API.getSavedArticles()
  		.then(res => 
  			this.setState({ savedArticles: res.data}))
  		.catch(err => console.log(err));
  	};

  	deleteArticle = id => {
		API.deleteArticle(id)
			.then(res => this.loadSavedArticles())
			.catch(err => console.log(err));
	};


	render() {
		return (
			<Container>
				<Jumbotron>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</Jumbotron>	
				<Row>
					<Col size="md-12">
						<FormContainer title="Saved Articles" icon="fa fa-table" id="saved-articles">
							{this.state.savedArticles.map(article => (
								<div className="row well" key={article._id}>
									<Col size="md-10">	
										<h3 className='articleHeadline'>
											<strong>{article.title}</strong>
										</h3>
										<h5>{"published: " + article.date}</h5>
										<a href={article.url}>{article.url}</a>
									</Col>
									<Col size="md-2">
										<DelBtn onClick={() => this.deleteArticle(article._id)}/>	
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

export default Saved;
