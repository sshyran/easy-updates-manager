import React from 'react';
import {render} from 'react-dom';
import LoadingGif from './loading.jsx';
import EUM from './main.jsx';
import EUMActions from '../data/EUMActions.jsx';
import ToggleItemInput from './toggleiteminput.jsx';

class ToggleItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			checked     : this.props.checked,
			itemClasses : this.maybeActiveItem(),
			disabled    : this.props.disabled,
			label       : mpsum.enabled,
			loading     : false
		};
	}
	maybeSetActive(checked) {
		if(checked) {
			return 'dashboard-item active';
		} else {
			return 'dashboard-item';
		}
	}
	maybeActiveItem() {
		return this.maybeSetActive(this.props.checked);
	}
	componentWillReceiveProps(newprops) {
		this.setState({
			loading:newprops.loading,
			checked:newprops.checked,
			disabled:newprops.disabled
		});
	}
	render() {
		return (
			<div>
				<div className={this.maybeActiveItem()}>
					<div className="dashboard-item-header input-radio">
						{this.props.title}	
					</div>
					<ToggleItemInput
						id={this.props.name}
						name={this.props.name}
						onChange={this.itemChange}
						checked={this.state.checked}
						disabled={this.state.disabled}
						context={this.props.context}
					/>		
				</div>	
			</div>	
		);
	}
}
ToggleItem.propTypes = {
	checked: React.PropTypes.bool.isRequired,
	title: React.PropTypes.string.isRequired,
	disabled: React.PropTypes.bool.isRequired,
	name: React.PropTypes.string.isRequired,
	context: React.PropTypes.string.isRequired,
	loading: React.PropTypes.bool.isRequired
};
ToggleItem.defaultProps = {
	checked: false,
	title: '',
	disabled: false,
	name: '',
	context: '',
	loading: false
};
export default ToggleItem;