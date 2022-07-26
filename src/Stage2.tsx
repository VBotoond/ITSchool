import React, {useState} from 'react';
import {AppStateApi} from './types';

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
    const x = getRandomInt(10, 90);
    const y = getRandomInt(10, 90 - x);

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

interface Stage2Props {
    appStateApi: AppStateApi
}

export function Stage2(props: Stage2Props) {
    const [state, setState] = useState(initialState());
    const {appStateApi} = props;
    return (
        <div className={"center"}>
            <form>

                {state.x}+{state.y}=
                <input type="number" id="result" name="result" autoFocus={true}/>
                <button type="button" onClick={() => check(state, setState, appStateApi)}>Submit</button>
                <button type="button" onClick={() => setState(initialState())}>
                    Reset
                </button>
            </form>
            <p>{state.msg}</p>
        </div>
    );
}

