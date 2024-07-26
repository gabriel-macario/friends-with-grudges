export function isLetter(e: KeyboardEvent): boolean {
    return e.code === `Key${e.key.toUpperCase()}`;
}

export function isEnter(e: KeyboardEvent): boolean {
    return e.code === `Enter`;
}