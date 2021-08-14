import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom';
import './App.css'




export default class search extends Component {

    state={
        query:'',
        results: [],
        searching: false,
        not_found: false,
    }


    search=(e)=>{

        if(e.target.value === '') {
            
            this.setState({
                results : [],
                not_found:false,
                searching:false,
                query:e.target.value,
            })

            return
        };

        this.setState({
            searching : true,
            not_found : false,
            query :e.target.value,
        })
        
        BooksAPI.search(e.target.value).then(result=>{


            if(result!==undefined && !result.error){
              
                this.setState({
                    results : result !== null ? result : [],
                    not_found:false,
                    searching:false,
                })
           
            }else{

                this.setState({
                    results : [],
                    not_found: this.state.query === '' ? false : true,
                    searching:false,
                })

            }
            

        })

    }


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link to={'/'}>
                       <button className="close-search" style={{textDecoration:'none',border:'none'}} >Close</button>
                    </Link> 


                  <div className="search-books-input-wrapper">
                    
                    <input type="text" placeholder="Search by title or author" onChange={(e)=>this.search(e)}/>
    
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                  
                  
                    {

                        this.state.results.length !== 0 && this.state.query !== '' ? (

                            <div className="bookshelf">
                                    <div className="bookshelf-books">
                                    <ol className="books-grid">{

                                        this.state.results.map((book,i)=>{

                                            return(
                
                                                
                                                    <li key={i}>
                                                    <div className="book">
                                                        <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.get_thumbnail(book)+')' }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select onChange={(e) => this.props.move_to(e,book,i)} value='move'>
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
                            

                        ) : (

                            this.state.searching ? <h3>Searching...</h3> : this.state.query==='' ? <h3>Search Books</h3> : this.state.not_found ? <h3>No Result</h3> : <h3>Search Books</h3>

                        )
                        

                    }


                  </ol>
                </div>
              </div>
        )
    }
}
