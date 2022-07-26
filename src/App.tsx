import React, {useState} from 'react';
import './App.css';
import {Stage1} from './Stage1';
import {AppState, AppStateApi} from './types';
import {Stage2} from './Stage2';
import {Header} from "./Header";


function initialState(): AppState {
    const appState = localStorage.getItem('state');
    if (appState != null) {
        console.log(appState)
        return JSON.parse(appState);
    } else {
        return {currStage: 0, lastStage: 0};
    }
}


function App() {
    const [appState, setAppState] = useState(initialState());

    const appStateApi: AppStateApi = {
        goToNextStage: () => {
            if (appState.currStage < appState.lastStage) {
                appStateApi.setAppState({currStage: appState.currStage + 1, lastStage: appState.lastStage})
            }
        },

        goToPrevStage: () => {
            if (appState.currStage > 0) {
                appStateApi.setAppState({currStage: appState.currStage - 1, lastStage: appState.lastStage})
            }
        },

        completeStage: () => {
            if (appState.currStage == appState.lastStage) {
                appStateApi.setAppState({currStage: appState.currStage, lastStage: appState.lastStage + 1})
            }
        },

        setAppState: (newState: AppState) => {
            setAppState(newState)
            localStorage.setItem('state', JSON.stringify(newState));
        }
    };

    let stage: JSX.Element;

    switch (appState.currStage) {
        case 0:
            console.log("0")
            stage = <Stage1 appStateApi={appStateApi}/>;
            break;
        case 1:
            console.log("1")
            stage = <Stage2 appStateApi={appStateApi}/>;
            break;
        default:
            console.log("default")
            stage = <Stage1 appStateApi={appStateApi}/>;
            break;
    }

    console.log(appState, "sd")

    return <Header el={stage} appState={appState} appStateApi={appStateApi}/>;

}

export default App;
