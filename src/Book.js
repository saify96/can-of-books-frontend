import React, { Component } from 'react'

export class Book extends Component {
    render() {
        return (
            <div>
                <>
                    <h2> My Books</h2>
                    {this.props.booksData.length &&
                     this.props.booksData.map((book, idx) => (
                        <div key={idx}>
                            {book.name}
                            {book.description}
                            {book.status}
                        </div>
                    ))}
                </>
            </div>
        )
    }
}

export default Book
