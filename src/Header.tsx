import React from 'react';
import {AppStateApi, AppState} from './types';
import {Button} from './Buttons';
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
                <Button onClick={() =>appStateApi.goToPrevStage()} label="Prev"/>
                <Button onClick={() =>appStateApi.goToNextStage()} label="Next"/>


            </div>

            {el}
        </header>

    )
}