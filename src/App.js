import React from 'react'
import './App.css'
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './home'
import Search from './search'


class BooksApp extends React.Component {
  
  constructor(){
    super();

    this.state={
        currently_reading: window.localStorage.getItem('currently_reading') !==null ? JSON.parse(window.localStorage.getItem('currently_reading')) : [],
        want_to_read: window.localStorage.getItem('want_to_read') !==null ? JSON.parse(window.localStorage.getItem('want_to_read')) : [],
        read: window.localStorage.getItem('read') !==null ? JSON.parse(window.localStorage.getItem('read')) : [],
    }
    
  }


  move_to=(e,book,key)=>{




        if(e.target.value==='currentlyReading'){


            
            if(window.localStorage.getItem('currently_reading')===null){
              
                let currently_reading=[book];
                window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));
                alert('Book Added to "Currently Reading" Successfully.')


            }else{

                let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));
                let flag=false;

                currently_reading.forEach(obj => {
                    if(obj.title===book.title){
                        flag=true;
                    }
                });


                if(!flag){
                  
                    currently_reading.push(book);
                    window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading))
                    alert('Book Added to "Currently Reading" Successfully.')

                }else{

                    alert('Book is Already Added to "Currently Reading".')

                }
               

            }

            let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
            let read=JSON.parse(window.localStorage.getItem('read'));

            if(want_to_read!==null){
              
                want_to_read.forEach((element,i) => {
                    
                    if(element.id===book.id){

                        want_to_read.splice(i,1);
                        window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));

                    }

                });
              
              
            }
            
            if(read!==null){

                read.forEach((element,i) => {
                    
                    if(element.id===book.id){

                        read.splice(i,1);
                        window.localStorage.setItem('read',JSON.stringify(read));

                    }

                });


            }



        }else if(e.target.value==='wantToRead'){
          
          
            if(window.localStorage.getItem('want_to_read')===null){
              
                let want_to_read=[book];
                window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));
                alert('Book Added to "Want to Read" Successfully.')


            }else{

                let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
                let flag=false;

                want_to_read.forEach(obj =>{

                    if(obj.title===book.title){
                        flag=true;
                    }

                })

                if(!flag){
                  
                    want_to_read.push(book);
                    window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read))
                    alert('Book Added to "Want to Read" Successfully.')

                }else{

                    alert('Book is Already Added to "Want to Read".')

                }
               

            }

            let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));
            let read=JSON.parse(window.localStorage.getItem('read'));

            if(currently_reading!==null){

                currently_reading.forEach((element,i) => {
                    
                    if(element.id===book.id){

                        currently_reading.splice(i,1);
                        window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));

                    }

                });

            }
            
            if(read!==null){

                read.forEach((element,i) => {
                    
                    if(element.id===book.id){

                        read.splice(i,1);
                        window.localStorage.setItem('read',JSON.stringify(read));

                    }

                });


            }


        }else if(e.target.value==='read'){

            if(window.localStorage.getItem('read')===null){
              
                let read=[book];
                window.localStorage.setItem('read',JSON.stringify(read));
                alert('Book Added to "Read" Successfully.')


            }else{

                let read=JSON.parse(window.localStorage.getItem('read'));
                let flag=false;

                read.forEach(obj =>{

                    if(obj.title===book.title){
                        flag=true;
                    }

                })

                if(!flag){
                  
                    read.push(book);
                    window.localStorage.setItem('read',JSON.stringify(read))
                    alert('Book Added to "Read" Successfully.')

                }else{

                    alert('Book is Already Added to "Read".')

                }
               

            }

            let want_to_read=JSON.parse(window.localStorage.getItem('want_to_read'));
            let currently_reading=JSON.parse(window.localStorage.getItem('currently_reading'));

            if(want_to_read!==null){
              
                want_to_read.forEach((element,i) => {
                    
                    if(element.id===book.id){

                        want_to_read.splice(i,1);
                        window.localStorage.setItem('want_to_read',JSON.stringify(want_to_read));

                    }

                });
              
              
            }
            
            if(currently_reading!==null){

                currently_reading.forEach((element,i) => {
                    
                    if(element.id===book.id){

                        currently_reading.splice(i,1);
                        window.localStorage.setItem('currently_reading',JSON.stringify(currently_reading));

                    }

                });

            }

        }

        this.setState({
            currently_reading: window.localStorage.getItem('currently_reading') !==null ? JSON.parse(window.localStorage.getItem('currently_reading')) : [],
            want_to_read: window.localStorage.getItem('want_to_read') !==null ? JSON.parse(window.localStorage.getItem('want_to_read')) : [],
            read: window.localStorage.getItem('read') !==null ? JSON.parse(window.localStorage.getItem('read')) : [],
        });

  }


  get_thumbnail=(book)=>{

      if(book.imageLinks){
          return book.imageLinks.thumbnail
      }else{
          return '' //image not found
      }

  }


  render(){
    return (
      <div className="App">
      
      <BrowserRouter>
      
      <Route exact path='/' render={()=> <Home books={this.state} move_to={this.move_to} get_thumbnail={this.get_thumbnail} />} ></Route>
      <Route path='/search' render={()=> <Search books={this.state} move_to={this.move_to} get_thumbnail={this.get_thumbnail} />}></Route>
     
      
      
      </BrowserRouter>
  
  
      </div>
    );
  }


}

export default BooksApp
