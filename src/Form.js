import React from "react";
import "./Form.css";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
    	event.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<form className="form" 
						onSubmit={this.handleSubmit}>
					<input 
						name="name" 
						type="text" 
						value={this.state.value} placeholder="Name"
						className="form-input" onChange={this.handleChange} 
					/>
					<input
						name="lastname"
						type="text"
						value={this.state.value}
						placeholder="Last Name"
						className="form-input"
						onChange={this.handleChange}
					/>
					<input
						name="email"
						type="email"
						value={this.state.value}
						onChange={this.handleChange}
						placeholder="Email"
						className="form-input"
					/>
					<input
						name="phone"
						type="tel"
						value={this.state.value}
						onChange={this.handleChange}
						placeholder="Phone"
						className="form-input"
					/>
					<textarea 
						value={this.state.value} 
						onChange={this.handleChange}
						placeholder="You may write me here..." 
					/>
					<button 
						type="button" value="submit"
						className="button">
							SEND
					</button>
				</form>
			</div>
		);
	}
}

export default Form;
