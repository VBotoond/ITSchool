export interface AppState {
    currStage: number;
    lastStage: number;

}

export interface AppStateApi {
    goToNextStage: () => void;
    goToPrevStage: () => void;
    completeStage: () => void;
    setAppState: (newState: AppState) => void;
}
