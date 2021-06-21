import React, { Component } from 'react'
import axios from 'axios'
import Book from './Book'
import { withAuth0 } from "@auth0/auth0-react";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export class Bestbook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: this.props.auth0.user.email,
            booksData: []
        }
    }
    componentDidMount = async () => {
        await axios.get(`${serverUrl}/books?email=${this.state.userEmail}`).then(response => {
            // console.log(response)
            this.setState({
                booksData: response.data[response.data.length-1].books,
            })
        }).catch(error => alert(error))
    }
    render() {
        return (
            <div>
                {
                    this.state.booksData.length > 0 &&
                    <Book
                        booksData={this.state.booksData}
                    />
                }
            </div>
        )
    }
}
export default withAuth0(Bestbook);
