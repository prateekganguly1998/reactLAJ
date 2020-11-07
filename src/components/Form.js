import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input className="search" type="text" name="city" placeholder="City..."/>
		<button className="button"><span>Get Weather</span></button>
	</form>
);

export default Form;