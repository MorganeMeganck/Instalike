import React from 'react';
import axios from 'axios';
import "./Post.css";

export default class PhotosList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      users: [],
      photoUser:[]
    }
  }
  componentDidMount() {
    axios.all([
      axios.get(`https://jsonplaceholder.typicode.com/users`),
      axios.get(`https://jsonplaceholder.typicode.com/photos`)
    ])
    .then(axios.spread((resUsers, resPhotos) => {
      const users = resUsers.data;
      this.setState({ users });
      const photos = resPhotos.data;
      this.setState({ photos });
       this.mergeArray();
    }))
  }

  mergeArray(){
    let merge =[];
    let photoName = {};
    let match=false;
    this.state.photos.map(photo =>{
      this.state.users.map(user =>{
        if(photo.id == user.id){
          photoName={
            id : photo.id,
            url: photo.url,
            title: photo.title,
            icon: photo.thumbnailUrl,
            name: user.name
          };
          match = true;
        }
      })
    
    if(match){
      merge.push(photoName);
    }
    this.setState({photoUser : merge})
    })  
  }

  render() {
    return (
      <article className="Post" ref="Post">
      <ul>
      <div className="Post-image">
        <div className="test">
          {this.state.photoUser.slice(0,5).map(photo => <li className="elements" key={photo.id}><div className="user"><img className="icon" src={photo.icon}/><p className="name">{photo.name}</p></div><img className="image" src={photo.url} /><div className="legend"><p className="name">{photo.name}</p><p className="title"> {photo.title}</p></div></li>)}
        </div>
      </div>
      </ul>
     </article>
    )
  }
  
}
