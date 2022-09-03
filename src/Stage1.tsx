import React, {useState} from 'react';
import {AppStateApi} from './types';
import {Button} from "./Buttons";

interface State {
    x: number;
    y: number;
    msg?: string;

}


type SetStateFn = React.Dispatch<React.SetStateAction<State>>;

function getRandomInt(min: number, max: number) {

    return Math.floor(Math.random() * (max - min) + min);

}

function initialState(): State {
    const x = getRandomInt(1, 9);
    const y = getRandomInt(1, 9 - x);

    return {x, y};
}

function check(state: State, setState: SetStateFn, appStateApi: AppStateApi) {
    let uinput = parseInt((document.getElementById("result") as HTMLInputElement).value);

    if (uinput === state.x + state.y) {
        setState({...state, msg: "Correct answer"});
        appStateApi.completeStage();

    } else {
        setState({...state, msg: "Incorrect answer"});
    }
}

interface Stage1Props {
    appStateApi: AppStateApi
}

export function Stage1(props: Stage1Props) {
    const [state, setState] = useState(initialState());
    const {appStateApi} = props;
    return (

        <div className={"center"}>
            <form onSubmit={(e) => {
                e.preventDefault();
            }
            }>
                {state.x}+{state.y}=
                <input type="number" id="result" name="result" autoFocus={true}/>
                <Button onClick={() =>check(state, setState, appStateApi)} label="Submit"/>
                <Button onClick={() =>setState(initialState())} label="Reset"/>

            </form>
            <p>{state.msg}</p>
        </div>
    );
}

