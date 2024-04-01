import { useState } from 'react'
import * as React from "react"



const App=()=> {
  
  const stories= [
    {
      title:"React",
      url:"https://reactjs.org/",
      objectID:0,
      author:"Nfaiedh imen",
      num_comments: 7,
      points:7
    
    },
    {title:"Redux",
    url:"https://redux.js.org/",
    objectID:0,
    author:"Nfaiedh imen",
    num_comments: 7,
    points:7
    }
    
    
    ] ;

    const [searchTerm, setSearchTerm]= React.useState(
      localStorage.getItem("search") || "Redux"
    );

    React.useEffect(()=>{
      localStorage.setItem("search" ,searchTerm);
    },[searchTerm]);

    const handleSearch = (event) =>{
      setSearchTerm(event.target.value);
      
    }
    const searchedStories =stories.filter(function(story){
      return story.title.toLowerCase().includes(searchTerm);
    })

    
  return(
  
    <div>
      <h1> my hacker stories</h1>
      <Search search ={searchTerm} onSearch={handleSearch}/>
      <hr/>
      <List list={searchedStories}/>

    </div>
  );

};


const Search=(props) =>
{
  const {search , onSearch}= props

  //const handleChange= (event) => {
    //console.log(event);
    //setSearchTerm(event.target.value)
  

  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="Search" type="text"
      //value={props.search}
      value={search}
      onChange={onSearch}>
        
      </input>
      <p>
        searching for <strong>{props.searchTerm}</strong>
      </p>
    </div>
  );
};


const List=(props)=>
  (
    <ul>
        {props.list.map((item)=> (
          <Item key={item.objectID} item={item}/>

            
          ) )}
          
      
      </ul>
  );
  
const Item = (props)=> (
  <li>
  <span> <a href ={props.item.url}> {props.item.title}</a></span>
  <span>{props.item.author}</span>
  <span>{props.item.num_comments}</span>
  <span>{props.item.points}</span>
</li>
);

export default App;
