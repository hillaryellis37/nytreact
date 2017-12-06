import React from "react";

export const Input = props => 
    <div className="form-group">
    	<label for={props.for}>{props.children}</label>
    	<input 
    		type="text" 
    		class="form-control"
    		for={props.for} 
			value={props.value}
			id={props.id}
			onChange={props.onChange}
			name={props.name} />
    </div>;