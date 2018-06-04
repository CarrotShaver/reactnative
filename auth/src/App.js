import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


// Grain #D7CEC7
// BlackBoard #565656
// Oxblood #76323F
// Tan #C09F80
// Paper #F7F7F7

class App extends Component {
    
    state = { loggedIn: null };
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAkm6v5gpdbLBxJx5Cdd8Cx1_9VDx0qNSo',
            authDomain: 'auth-a391d.firebaseapp.com',
            databaseURL: 'https://auth-a391d.firebaseio.com',
            projectId: 'auth-a391d',
            storageBucket: 'auth-a391d.appspot.com',
            messagingSenderId: '1088755546913'
          });

        firebase.auth().onAuthStateChanged((user)=> {
                if (user) {
                    this.setState({ loggedIn: true });
                }
                else {
                    this.setState({ loggedIn: false });
                }
            }
        );
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button whenPressed={() => firebase.auth().signOut()}>
                            Log Out 
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }     
    }

    render() {
        return (
            <View >
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
};

export default App