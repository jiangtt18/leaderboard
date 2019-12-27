import React, {Component} from 'react';
import {usersJSON} from '../data';

export default class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: usersJSON
		};

		this.compareByAge = this.compareByAge.bind(this);
		this.compareByName = this.compareByName.bind(this);
		this.compareByPoints = this.compareByPoints.bind(this);
		this.compareByRank = this.compareByRank.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		let type = nextProps.sortBy;
		let sortedData = this.sortUser(type);
		this.setState({users: sortedData});
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

	sortUser = (type) => {
		let sorted = [];
		let {users} = this.state;
		switch(type){
			case 'name':
				sorted = users.sort((a, b) => (this.compareByName(a.name, b.name)));
				break;
			case 'age':
				sorted = users.sort((a,b) => (this.compareByAge(a.age,b.age)));
				break;
			case 'points':
				sorted = users.sort((a,b) => (this.compareByPoints(a.points,b.points)));
				break;
			case 'rank':
				sorted = users.sort((a,b) => (this.compareByRank(a.rank,b.rank)));
				break;
		}
		return sorted;
	};


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
				<tr key={`head`}>
					<th>Age</th>
					<th>Name</th>
					<th>Points</th>
					<th>Rank</th>
				</tr>
				{rows}
				</thead>
				<tbody></tbody>
			</table>
		</div>)
	}
}
