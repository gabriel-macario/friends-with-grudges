export function isLetter(e: KeyboardEvent): Boolean {

    return e.code === `Key${e.key.toUpperCase()}`;

}
