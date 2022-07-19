import React from 'react';
import {AppStateApi, AppState} from './types';

export function Header(el: JSX.Element, appState: AppState, appStateApi: AppStateApi) {
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