import React, { Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom';


export default class home extends Component {


    render() {
        return (
          <div className="app">
            
            <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               
                <div>
               
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            
                            {

                                this.props.books.currently_reading.length !== 0 ? (

                                    <div className="bookshelf">
                                            <div className="bookshelf-books">
                                            <ol className="books-grid">{

                                                this.props.books.currently_reading.map((book,i)=>{

                                                    return(
                        
                                                        
                                                            <li key={i}>
                                                            <div className="book">
                                                                <div className="book-top">
                                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.get_thumbnail(book)+')' }}></div>
                                                                <div className="book-shelf-changer">
                                                                    <select onChange={(e) => this.props.move_to(e,book,i)} value='currentlyReading'>
                                                                        <option value="move" disabled>Move to...</option>
                                                                        <option value="currentlyReading">Currently Reading</option>
                                                                        <option value="wantToRead">Want to Read</option>
                                                                        <option value="read">Read</option>
                                                                        <option value="none">None</option>
                                                                    </select>
                                                                </div>
                                                                </div>
                                                                <div className="book-title">{book.title}</div>
                                                                <div className="book-authors">{book.authors}</div>
                                                            </div>
                                                            </li>
                                                        
                        
                                                    );
                                                
                        
                                                })


                                            }

                                            </ol>
                                            </div>
                                        </div>
                                    

                                ) : <h3>No Books</h3>
                                

                            }
                    
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                        
                        {

                            this.props.books.want_to_read.length !== 0 ? (

                                <div className="bookshelf">
                                        <div className="bookshelf-books">
                                        <ol className="books-grid">{

                                            this.props.books.want_to_read.map((book,i)=>{

                                                return(
                    
                                                    
                                                        <li key={i}>
                                                        <div className="book">
                                                            <div className="book-top">
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.get_thumbnail(book)+')' }}></div>
                                                            <div className="book-shelf-changer">
                                                                <select onChange={(e) => this.props.move_to(e,book,i)} value='wantToRead'>
                                                                    <option value="move" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading</option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                            </div>
                                                            <div className="book-title">{book.title}</div>
                                                            <div className="book-authors">{book.authors}</div>
                                                        </div>
                                                        </li>
                                                    
                    
                                                );
                                            
                    
                                            })


                                        }

                                        </ol>
                                        </div>
                                    </div>
                                

                            ) : <h3>No Books</h3>
                            

                        }
                        
                            

                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                    
                    {

                        this.props.books.read.length !== 0 ? (

                            <div className="bookshelf">
                                    <div className="bookshelf-books">
                                    <ol className="books-grid">{

                                        this.props.books.read.map((book,i)=>{

                                            return(
                
                                                
                                                    <li key={i}>
                                                    <div className="book">
                                                        <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.get_thumbnail(book)+')' }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select onChange={(e) => this.props.move_to(e,book,i)} value='read'>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>
                                                        <div className="book-authors">{book.authors}</div>
                                                    </div>
                                                    </li>
                                                
                
                                            );
                                        
                
                                        })


                                    }

                                    </ol>
                                    </div>
                                </div>
                            

                        ) : <h3>No Books</h3>
                        

                    }
                    


                    </ol>
                    </div>
                </div>
               
                </div>
            
            </div>
         
         
         
            <div className="open-search">
                    <Link to={'/search'}>
                        <button style={{textDecoration:'none',border:'none'}}>Add a book</button>
                    </Link>
            </div>
            </div>
            
          </div>
        )
    }
    
}
