import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {

    state = { albums: [] };

    //componentWillMount function is called automatically, one time, upon component creation
    componentWillMount () {
        //Sends 'get' request to rallycoding
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    //renderAlbums is called in the render function to create an "album" map object based on the key of object.url
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail details={album} key={album.url} />
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;