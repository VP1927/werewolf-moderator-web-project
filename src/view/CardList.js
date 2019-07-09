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
			<div className="container-fluid mainPage">
				<h1 className= 'pageName'> Card list </h1>
				<div className='list container'>
					<ul className='row'>
					{hits.map(hit =>
						<li key={hit.idcard} className='col-lg-3'>
							<div className="item" id='f1_container' key={hit.idcard}>
								<div className='content'>
									<div id="f1_card" className="shadow" key={hit.idcard}>
										<div className="front face" key={hit.idcard}>
											<img src={hit.imageLink} alt='pic' key={hit.idcard}/>
											{/* <h4 class="card-title">Sunlimetech</h4> */}
										</div>
										<div className="back face center" key={hit.idcard}>
											<p key={hit.idcard} >{hit.description}</p>
										</div>
									</div>
								</div>
							</div>
						</li>)
					}
					</ul>
				</div>
			</div>

		)
	}
}

export default CardList
