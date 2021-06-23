import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showAddBookForm: false,
            addedBookName: '',
            addedBookDesc: '',
            addedBookStatus: ''
        }
    }
    showAddBookFormFunc = () => {
        this.setState({
            showAddBookForm: !this.state.showAddBookForm
        })
    }
    getBookName = (e) => {
        this.setState({
            addedBookName: e.target.value
        })
    }
    getBookDesc = (e) => {
        this.setState({
            addedBookDesc: e.target.value
        })
    }
    getBookStatus = (e) => {
        this.setState({
            addedBookStatus: e.target.value
        })
    }
    getBookInfo = (e) => {
        e.preventDefault();
        this.props.handleAddedBookInfo(this.state.addedBookName, this.state.addedBookDesc, this.state.addedBookStatus)
        this.setState({
            showAddBookForm: false
        })
    }
    render() {
        return (
            <>
                <Button variant="primary" type="submit" onClick={this.showAddBookFormFunc}>
                    ADD Book
                </Button>
                {
                    this.state.showAddBookForm &&
                    <Form onSubmit={this.getBookInfo}>
                        <Form.Group>
                            <h3>ADD BOOk: </h3>
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Name" onChange={this.getBookName} required/>
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Description" onChange={this.getBookDesc} />
                            <Form.Label>Book Status</Form.Label>
                            <Form.Control type="text" placeholder="Enter Book Status" onChange={this.getBookStatus} />
                        </Form.Group>
                        <input value="ADD" type='submit' />
                    </Form>
                }
            </>
        )
    }
}
export default AddBook
