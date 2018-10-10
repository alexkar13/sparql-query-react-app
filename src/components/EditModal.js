import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')

export default class EditModal extends React.Component {

    handleEditQuery = (e) => {
        e.preventDefault();
        const query = {
            id: e.target.elements.id.value.trim(),
            name: e.target.elements.name.value.trim(),
            creator: e.target.elements.creator.value.trim(),
            description: e.target.elements.description.value.trim(),
            query: e.target.elements.query.value.trim()
        }
        this.props.handleEditQuery(query);   
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen={!!this.props.selectedQuery}
                    contentLabel='edit modal'
                    onRequestClose = {this.props.handleCloseModal}
                    className ="modal"
                    closeTimeoutMS={200}
                >   
                    {(!!this.props.selectedQuery) &&
                        <div className="wrapper">
                            <form onSubmit={this.handleEditQuery}>
                                <h2 className = "modal__title">Edit Query</h2>
                                <div className = "inputs">
                                    <input className="input" type="text" name="id" defaultValue={this.props.selectedQuery.id} disabled required/>
                                    <input className="input" type="text" name="name" defaultValue={this.props.selectedQuery.name} required/><br></br>
                                    <input className="input" type="text" name="creator" defaultValue={this.props.selectedQuery.creator} required/>
                                    <input className="input" type="text" name="description" defaultValue={this.props.selectedQuery.description} placeholder="description"/><br></br>
                                    <input className="input" type="text" name="query" defaultValue={this.props.selectedQuery.query} placeholder = "query" required/><br></br>
                                    <button className="input cancel-btn" onClick={this.props.handleCloseModal}>Cancel</button>
                                    <button className="input submit-btn" type="submit">Save</button>
                                </div> 
                                
                            </form>
                        </div>
                    }
                </Modal>
            </div>
        );
    }
}  