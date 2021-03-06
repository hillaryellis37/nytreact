import React from "react";

export const FormBtn = props => 
	<button 
		type="submit" 
		className="btn btn-default" 
		onClick={props.handleFormSubmit}
	>
	{props.children}
	</button>;