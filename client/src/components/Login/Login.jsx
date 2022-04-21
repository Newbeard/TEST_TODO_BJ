
export default function Login() {


	const hendlerSubmit = (event) => {
		event.preventDefault();

	};

	return (
		<form onSubmit={hendlerSubmit}>
			<div className="uk-margin">
				<div className="uk-inline">
					<span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: mail" />
					<input className="uk-input" id="email" type="text" name="email" placeholder="Email" />
				</div>
			</div>

			<div className="uk-margin">
				<div className="uk-inline">
					<span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock" />
					<input className="uk-input" id="password" type="password" name="password" placeholder="Password" />
				</div>
			</div>
			<center>
				<button className="uk-button uk-button-secondary">SignIn</button>
			</center>
		</form>
	);
}
