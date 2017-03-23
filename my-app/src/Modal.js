import React from 'react'
import { Button, Modal } from 'react-bootstrap'


 	const Trigger = React.createClass({
	getInitialState() {
		return {show: true}
	},

	render () {
		let close = () => this.setState({show: false});

		return (
			<div>
				<div className='modal-container' style={{height: 200}}>
				<Modal 
				show={this.state.show}
				onHide={close}
				container={this}
				aria-labelledby="contained-modal-title">

				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title'>Search Bar</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<strong>Feeling Lucky? Enter your search item in the Google search bar, 
						get one result back!</strong>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
			</div>

		)
	}

})
export default Trigger;
