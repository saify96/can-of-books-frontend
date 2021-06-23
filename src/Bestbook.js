import React, { Component } from 'react'
import axios from 'axios'
import Book from './Book'
import { withAuth0 } from "@auth0/auth0-react";
import AddBook from './AddBook'
import UpdateBook from './UpdateBook'

const serverUrl = process.env.REACT_APP_SERVER_URL;

export class Bestbook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: this.props.auth0.user.email,
            booksData: [],
            addedBookName: '',
            addedBookDesc: '',
            addedBookStatus: '',
            showUpdateForm: false,
            recievedBookName: '',
            recievedBookDesc: '',
            recievedBookStatus: '',
            updateIdx:''

        }
    }
    componentDidMount = async () => {
        await axios.get(`${serverUrl}/books?email=${this.state.userEmail}`).then(response => {
            this.setState({
                booksData: response.data[0].books,
            })
        }).catch(error => alert(error))
    }
    handleAddedBookInfo = async (bookName, bookDesc, bookStatus) => {
        await this.setState({
            addedBookName: bookName,
            addedBookDesc: bookDesc,
            addedBookStatus: bookStatus
        })
        const reqBody = {
            userEmail: this.state.userEmail,
            bookName: this.state.addedBookName,
            bookDesc: this.state.addedBookDesc,
            bookStatus: this.state.addedBookStatus
        }
        axios.post(`${serverUrl}/book`, reqBody).then(response => {
            this.setState({
                booksData: response.data.books
            })
        }).catch(error => alert(error.message))
    }
    deleteMyBook = (idx) => {
        axios.delete(`${serverUrl}/book/${idx}?userEmail=${this.state.userEmail}`).then(response => {
            console.log(response);
            this.setState({
                booksData: response.data.books
            });
        }).catch(error =>
            alert(error.message)
        )
    }
    updateMyBook = async(idx, name, desc, status) => {
        await this.setState({
            showUpdateForm: true,
            recievedBookName: name,
            recievedBookDesc: desc,
            recievedBookStatus: status,
            updateIdx:idx
        })
    }
    handleUpdateBookInfo = async (bookName, bookDesc, bookStatus) => {

        console.log(bookName,bookDesc,bookStatus);
        const reqBody={
            userEmail: this.state.userEmail,
            bookName: bookName,
            bookDesc: bookDesc,
            bookStatus: bookStatus
        }
        await axios.put(`${serverUrl}/book/${this.state.updateIdx}`,reqBody).then(response => {
            console.log(response);
            this.setState({
                booksData: response.data.books,
                showUpdateForm: false
            });
        }).catch(error =>
            alert(error.message)
        )
    }
    render() {
        return (
            <div>
                <AddBook
                    handleAddedBookInfo={this.handleAddedBookInfo}
                />
                {this.state.showUpdateForm &&

                    <UpdateBook
                        recievedBookName={this.state.recievedBookName}
                        recievedBookDesc={this.state.recievedBookDesc}
                        recievedBookStatus={this.state.recievedBookStatus}
                        handleUpdateBookInfo={this.handleUpdateBookInfo}
                        
                    />
                }
                {
                    this.state.booksData.length > 0 &&
                    <Book
                        booksData={this.state.booksData}
                        deleteMyBook={this.deleteMyBook}
                        updateMyBook={this.updateMyBook}
                    />
                }
            </div>
        )
    }
}
export default withAuth0(Bestbook);
