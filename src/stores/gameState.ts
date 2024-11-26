import { create } from 'zustand';
import { KeyButtonStatusEnum } from '../enums/KeyButtonStatuses';
import { createSelectors } from './createSelectors';

// TODO: Make dynamic
const numTries = 6;

interface IGameBoardState {
    currentRow: number;
    currentString: string;
    currentWords: Array<string>;
    gameFinished: boolean;
    keyButtonStatuses: Map<string, KeyButtonStatusEnum>;
    addLetter: (letter: string) => void;
    removeLetter: () => void;
    setWinState: (newKeyButtonStatuses: Map<string, KeyButtonStatusEnum>) => void;
    setLossState: (newKeyButtonStatuses: Map<string, KeyButtonStatusEnum>) => void;
    incrementRow: (newKeyButtonStatuses: Map<string, KeyButtonStatusEnum>) => void;
}

const useGameStateStoreBase = create<IGameBoardState>()((set) =>({
    currentRow: 0,
    currentString: "",
    currentWords: Array(numTries).fill(""),
    gameFinished: false,
    keyButtonStatuses: new Map(),
    addLetter: (letter: string) => set((state) => {
        const updatedString: string = state.currentString + letter[0];
        const updatedWords: Array<string> = [...state.currentWords];
        updatedWords[state.currentRow] = updatedString;

        return {
            currentString: updatedString,
            currentWords: updatedWords
        };
    }),
    removeLetter: () => set((state) => {
        const updatedString: string = state.currentString.slice(0, state.currentString.length - 1);
        const updatedWords: Array<string> = [...state.currentWords];
        updatedWords[state.currentRow] = updatedString;
        
        return {
            currentString: updatedString,
            currentWords: updatedWords,
        }
    }),
    setWinState: (newKeyButtonStatuses: Map<string, KeyButtonStatusEnum>) => set((state) => {
        return {
            currentRow: state.currentRow + 1,
            currentString: "",
            currentWords: state.currentWords,
            keyButtonStatuses: newKeyButtonStatuses,
            gameFinished: true
        }
    }),
    setLossState: (newKeyButtonStatuses: Map<string, KeyButtonStatusEnum>) => set((state) => {
        return {
            currentRow: state.currentRow + 1,
            currentString: "",
            currentWords: state.currentWords,
            keyButtonStatuses: newKeyButtonStatuses,
            gameFinished: true
        }
    }),
    incrementRow: (newKeyButtonStatuses: Map<string, KeyButtonStatusEnum>) => set((state) => {
        return{
            currentRow: state.currentRow + 1,
            currentString: "",
            currentWords: state.currentWords,
            keyButtonStatuses: newKeyButtonStatuses,
            gameFinished: false
        }
    })
}));

export const useGameStateStore = createSelectors(useGameStateStoreBase);