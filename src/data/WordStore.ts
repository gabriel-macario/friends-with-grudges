import words from "./words.json";

interface TrieNode {
    children: Object,
    isEndOfWord: boolean
}

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

interface Trie {
    root: TrieNode;
    insert(word: string): void;
    search (word: string): boolean;
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return node.isEndOfWord;
    }
}

const WordStore = new Trie();

words.forEach(word => WordStore.insert(word));

export default WordStore;
