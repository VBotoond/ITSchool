import React from 'react';
import {AppStateApi, AppState} from './types';

interface HeaderProps {
    el: JSX.Element;
    appState: AppState;
    appStateApi: AppStateApi;
}

export function Header(props: HeaderProps) {

    const {el, appState, appStateApi} = props;

    return (

        <header>
            <div>
                stage:{appState.currStage + 1}/{appState.lastStage + 1}
                <button type="button" onClick={
                    () => appStateApi.goToPrevStage()
                }>Prev
                </button>
                <button type="button" onClick={
                    () => appStateApi.goToNextStage()
                }>Next
                </button>
            </div>

            {el}
        </header>

    )
}