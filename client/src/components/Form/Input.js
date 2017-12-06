import React from "react";

export const Input = props => 
    <div className="form-group">
    	<label for={props.for}>{props.children}</label>
    	<input 
    		value={props.search}
        	onChange={props.handleInputChange}
    		type="text" 
    		class="form-control" 
    		id={props.id} 
    	/>
    </div>;