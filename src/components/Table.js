import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		}
	}

	componentWillReceiveProps() {
		
	}

    // complete the comparators
	compareByAge(a, b) {
		return a - b;
	}

	compareByName(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	}

	compareByPoints(a, b) {
		return a - b;
	}

	compareByRank(a, b) {
		return a - b;
	}

	render() {
		let rows = this.state.users.map((hash, idx) => {
			return(
				<tr key={`head-${idx}`}>
					<th>{hash.age}</th>
					<th>{hash.name}</th>
					<th>{hash.points}</th>
					<th>{hash.rank}</th>
				</tr>
			)
		});
		return (<div>
			<table className="table table-striped">
				<thead>
				{rows}
				</thead>
				<tbody></tbody>
			</table>
		</div>)
	}
}
