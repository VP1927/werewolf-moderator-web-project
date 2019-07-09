import React from 'react';

class CardList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hits: [],
			isLoading: false,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });

		fetch('http://localhost:8080/cardlist')
			.then(response => response.json())
			.then(data => this.setState({ hits: data, isLoading: false }));
	}

	render() {

		const { hits, isLoading } = this.state;

		if (isLoading) {
			return <p>Loading...</p>;
		}

		return (
			<div className="list container-fluid">
				<ul>
					{hits.map(hit =>
						<li key={hit.idcard}>
							<div className="item" id='f1_container'>
								<div id="f1_card" class="shadow">
									<div class="front face">
										<img src={hit.imageLink} alt='pic'></img>								{/* <h4 class="card-title">Sunlimetech</h4> */}
									</div>
									<div class="back face center">
										<p>{hit.description}</p>
									</div>
								</div>
							</div>
						</li>)}
				</ul>
			</div>

		)
	}
}

export default CardList
