import React from "react";
import style from "./Form.module.css";
function Form(props) {
	const submitHandler = (event) => {
		event.preventDefault();
		console.log(event);
		const {
			target: {
				elements: {
					name: { value: firstname },
					surname: { value: lastname },
					email: { value: email },
					password: { value: password },
				},
			},
		} = event;
    const {registerUser} = props;
    registerUser({firstname, lastname, email, password})
	};
	return (
		<>
			<form className={style.form} onSubmit={submitHandler}>
				<label>
					Name
					<input name="name" type="text" />
				</label>
				<label>
					Surname
					<input name="surname" type="text" />
				</label>
				<label>
					Email
					<input name="email" type="email" />
				</label>
				<label>
					Password
					<input name="password" type="password" />
				</label>
				<div className={style.buttonContainer}>
					<button type="submit">sign up</button>
					<button type="reset">Cancel</button>
				</div>
			</form>
		</>
	);
}
export default Form;
