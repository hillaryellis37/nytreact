import React from "react";

export const DelBtn = props => 
	<button 
		type="submit" 
		className="btn btn-default" 
		{...props}
	>
	Delete Article
	</button>;