import React from "react";

export const FormContainer = props =>
	<div className="panel panel-primary">
		<div className="panel-heading">
			<h3 className="panel-title"><strong><i className={props.icon}></i> {props.title}</strong></h3>
		</div>
		<div className="panel-body">
			<div className="form">
				{props.children}
			</div>
		</div>
	</div>;