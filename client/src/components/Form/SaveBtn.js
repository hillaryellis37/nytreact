import React from "react";

export const SaveBtn = props => 
	<button 
		type="submit" 
		className="btn btn-default" 
		{...props}
	>
	Save Article
	</button>;