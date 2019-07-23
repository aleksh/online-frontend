import * as React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { Button, Container, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import { shippingActions } from "../../bus/shipping/actions";
import { userActions } from "../../bus/user/actions";
import VOUser from "../../VO/VOUser";
import Styles from "./Styles.module.scss";
import VOAddressError from "./VOAddressError";

interface IShippingAddressProps {
	user: VOUser;
	regions: any;
	actions: any;
}

export interface IShippingAddressState {
	address_1: string;
	address_2: string;
	city: string;
	region: string;
	postal_code: string;
	country: string;
	shipping_region_id: number;
	shipping_region: any;
	formErrors: VOAddressError;
	address_1Valid: boolean;
	cityValid: boolean;
	regionValid: boolean;
	postal_codeValid: boolean;
	countryValid: boolean;
	shipping_region_idValid: boolean;
	formValid: boolean;
	formTouched: boolean;
	[key: string]: any;
}

class ShippingAddress extends React.Component<
	IShippingAddressProps,
	IShippingAddressState
> {
	constructor(props: IShippingAddressProps) {
		super(props);

		this.state = {
			address_1: "",
			address_2: "",
			city: "",
			region: "",
			postal_code: "",
			country: "",
			shipping_region_id: 1,
			shipping_region: {},
			formErrors: new VOAddressError(),
			address_1Valid: true,
			cityValid: true,
			regionValid: true,
			postal_codeValid: true,
			countryValid: true,
			shipping_region_idValid: true,
			formValid: false,
			formTouched: false
		};
	}

	componentDidMount = () => {
		const { actions, regions } = this.props;

		if (!regions) {
			actions.regionsAsync();
		}
	};

	static getDerivedStateFromProps = (
		nextProps: IShippingAddressProps,
		prevState: IShippingAddressState
	) => {
		if (!prevState.formTouched && nextProps.user) {
			return {
				address_1: nextProps.user.address_1 || "",
				address_2: nextProps.user.address_2 || "",
				city: nextProps.user.city || "",
				region: nextProps.user.region || "",
				postal_code: nextProps.user.postal_code || "",
				country: nextProps.user.country || "",
				shipping_region_id: nextProps.user.shipping_region_id || 1
			};
		}

		return null;
	};

	_handleUserInput = (event: any) => {
		const { name, value } = event.target;

		this.setState({ [name]: value, formTouched: true }, () => {
			this._validateField(name, value || "");
		});
	};

	_handleSelectInput = (event: any) => {
		const { value } = event;

		this.setState({ shipping_region_id: value, formTouched: true }, () => {
			this._validateField("shipping_region_id", value || "");
		});
	};

	_validateField = (fieldName: any, value: any) => {
		let {
			formErrors,
			address_1Valid,
			cityValid,
			regionValid,
			postal_codeValid,
			countryValid,
			shipping_region_idValid
		} = this.state;

		switch (fieldName) {
			case "address_1":
				address_1Valid = value.length >= 6;
				formErrors.address_1 = address_1Valid ? "" : " too short";
				break;
			case "city":
				cityValid = value.length >= 3;
				formErrors.city = cityValid ? "" : " too short";
				break;
			case "region":
				regionValid = value.length >= 3;
				formErrors.region = regionValid ? "" : " too short";
				break;
			case "postal_code":
				postal_codeValid = value.length >= 3;
				formErrors.postal_code = postal_codeValid ? "" : " too short";
				break;
			case "country":
				countryValid = value.length >= 3;
				formErrors.country = countryValid ? "" : " too short";
				break;
			case "shipping_region_id":
				shipping_region_idValid = value !== 1;
				break;
			default:
				break;
		}

		this.setState(
			{
				formErrors,
				address_1Valid,
				cityValid,
				regionValid,
				postal_codeValid,
				countryValid,
				shipping_region_idValid
			},
			this._validateForm
		);
	};

	_validateForm = () => {
		this.setState({
			formValid:
				this.state.address_1Valid &&
				this.state.cityValid &&
				this.state.regionValid &&
				this.state.postal_codeValid &&
				this.state.countryValid &&
				this.state.shipping_region_idValid
		});
	};

	_handlerSubmit = (event: any) => {
		event.preventDefault();
		const {
			formValid,
			address_1,
			address_2,
			city,
			region,
			postal_code,
			country,
			shipping_region_id
		} = this.state;

		if (formValid) {
			const { actions } = this.props;

			actions.updateShippingAddressAsync({
				address_1,
				address_2,
				city,
				region,
				postal_code,
				country,
				shipping_region_id
			});
		}
	};

	public render() {
		const {
			formErrors,
			address_1,
			address_2,
			city,
			region,
			postal_code,
			country,
			shipping_region_id,

			address_1Valid,
			cityValid,
			regionValid,
			postal_codeValid,
			countryValid,
			shipping_region_idValid
		} = this.state;

		const { regions } = this.props;
		const selectedRegion = regions
			? regions.filter(
					item => item.shipping_region_id === shipping_region_id
			  )
			: "";

		return (
			<Container className={Styles.Profile}>
				<Row>
					<h2>
						<strong>SHIPPING ADDRESS</strong>
					</h2>
				</Row>
				<Row>
					<form onSubmit={this._handlerSubmit}>
						<div className={Styles.Form}>
							<div>
								<label
									htmlFor="address_1"
									className={
										!address_1Valid ? Styles.red : ""
									}
								>
									Address 1 *
								</label>
								<input
									id="address_1"
									name="address_1"
									autoFocus
									value={address_1}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>
									{formErrors.address_1}
								</p>
							</div>
							<div>
								<label htmlFor="address_2">Address 2</label>
								<input
									name="address_2"
									type="text"
									id="address_2"
									value={address_2}
									onChange={this._handleUserInput}
								/>
							</div>

							<div>
								<label
									htmlFor="city"
									className={!cityValid ? Styles.red : ""}
								>
									City *
								</label>
								<input
									id="city"
									name="city"
									value={city}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>{formErrors.city}</p>
							</div>

							<div>
								<label
									htmlFor="region"
									className={!regionValid ? Styles.red : ""}
								>
									Region *
								</label>
								<input
									id="region"
									name="region"
									value={region}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>
									{formErrors.region}
								</p>
							</div>

							<div>
								<label
									htmlFor="postal_code"
									className={
										!postal_codeValid ? Styles.red : ""
									}
								>
									Postal Code *
								</label>
								<input
									id="postal_code"
									name="postal_code"
									value={postal_code}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>
									{formErrors.postal_code}
								</p>
							</div>

							<div>
								<label
									htmlFor="country"
									className={!countryValid ? Styles.red : ""}
								>
									Country *
								</label>
								<input
									id="country"
									name="country"
									value={country}
									onChange={this._handleUserInput}
								/>

								<p className={Styles.red}>
									{formErrors.country}
								</p>
							</div>

							<div>
								<label
									htmlFor="shipping_region_id"
									className={
										!shipping_region_idValid
											? Styles.red
											: ""
									}
								>
									Shipping Region *
								</label>

								<Select
									value={selectedRegion}
									options={regions}
									name="shipping_region_id"
									onChange={this._handleSelectInput}
								/>

								<p className={Styles.red}>
									{formErrors.shipping_region_id}
								</p>
							</div>

							<div className={Styles.Buttons}>
								<Button
									size={"lg"}
									color="primary"
									type={"submit"}
								>
									Update
								</Button>
							</div>
						</div>
					</form>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		user: state.user.get("user"),
		regions: state.shipping.get("regions")
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(
			{ ...userActions, ...shippingActions },
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShippingAddress);
