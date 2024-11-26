import WordStore from "../data/WordStore";
import { useGameStateStore } from "../stores/gameState";

const numTries = 6;

export const submissionIsValid: (submission: string, solution: string) => boolean =
    (submission: string, solution: string) => {
        return submission.length === solution.length && WordStore.search(submission);
    }

export const submissionIsCorrect: (submission: string, solution: string) => boolean =
    (submission: string, solution: string) => {
        return submissionIsValid(submission, solution) && submission === solution;
    }

export const submissionIsLast: (submission: string, solution: string) => boolean =
    (submission: string, solution: string) => {
        return submissionIsValid(submission, solution) && useGameStateStore.getState().currentRow >= numTries - 1;
    }