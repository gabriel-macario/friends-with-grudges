export function isLetter(e: KeyboardEvent): Boolean {
    return e.code === `Key${e.key.toUpperCase()}`;
}

export function isEnter(e: KeyboardEvent): Boolean {
    return e.key === `Enter`;
}