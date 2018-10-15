import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
    }
  }
  componentDidMount() {
    axios.all([
      axios.get(`https://pixabay.com/api/?key=10399720-74b4e8e8c92d25cd730b2aaae&q=corgi&image_type=photo&pretty=true`)
    ])
    .then(axios.spread((resPhotos) => {
      const photos = resPhotos[].data;
      this.setState({ photos });

    }))
  }
   
  render() {
    return (
      <article className="Post" ref="Post">
      <ul>
      <div className="Post-image">
        <div className="test">
          {this.state.photos.slice(0,5).map(photo => <li ><img className="image" src={photo.pageURL} /></li>)}
        </div>
      </div>
      </ul>
     </article>
    )
  }
}

