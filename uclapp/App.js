import React from 'react';
import {StackNavigator} from 'react-navigation';
import CustomListView from './components/CustomListView';
import ItemDetail from "./components/ItemDetail";
import Email from "./components/Email";
import {MainActivity} from "./components/MainActivity";

global.teamList = [
    {id: 1, name: "Universitatea Cluj-Napoca", manager: "Adian Falub", stadium: "Cluj Arena"},
    {id: 2, name: "Liverpool FC", manager: "Jurgen Klopp", stadium: "Anfield"},
    {id: 3, name: "Atletico Madrid", manager: "Diego Simeone", stadium: "Wanda Metropolitano"},
    {id: 4, name: "Borussia Dortmund", manager: "Peter Bosz", stadium: "Signal Iduna Park"},
    {id: 5, name: "Juventus", manager: "Massimilano Allegri", stadium: "Juventus Arena"},
];
global.count = 5;

const App = StackNavigator({
    MainActivity:{
        screen:MainActivity,
    },
    CustomListView: {
        screen: CustomListView,
    },
    ItemDetail: {
        screen: ItemDetail,
    },
    Email:{
        screen:Email
    }
});


export default App;
