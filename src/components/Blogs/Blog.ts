
export interface BlogItem {
    image?: string;
    heading: string;
    date: string;
    slug: string;
    category: string
}

const url = "https://medium.com/@bp.singh/"

export const blogsList: BlogItem[] = [
    {
        // image: "",
        heading: "Var, Let, Const",
        date: "Sep 16, 2025",
        slug: url + "var-let-const-23293ebda7f8",
        category: "JavaScript"
    },
    {
        // image: "",
        heading: "Debounce vs. Throttle — When to Use Each",
        date: "Sep 20, 2025",
        slug: url + "debounce-vs-throttle-when-to-use-each-eab013c5fae1",
        category: "JavaScript"
    },
    {
        // image: "",
        heading: "Objects in Javascript",
        date: "Sep 21, 2025",
        slug: "objects-in-javascript-d0972fca9535",
        category: "JavaScript"
    },
    {
        // image: "",
        heading: "What is Lexical Scope?",
        date: "Oct 05, 2025",
        slug: "what-is-lexical-scope-d0358c6f52c0",
        category: "JavaScript"
    },
    {
        // image: "",
        heading: "Understanding JavaScript Promises: A Beginner-Friendly Guide",
        date: "Oct 10, 2025",
        slug: "understanding-javascript-promises-a-beginner-friendly-guide-742f82d72d16",
        category: "JavaScript"
    },
    {
        // image: "",
        heading: "4 variants of promises : Promise.all(), Promise.allSettled(), Promise.any(), and Promise.race()",
        date: "Oct 12, 2025",
        slug: "4-variants-of-promises-promise-all-promise-allsettled-promise-any-and-promise-race-98f5591a5224",
        category: "JavaScript"
    },
    {
        // image: "",
        heading: "Event Loop in JavaScript?",
        date: "Nov 01, 2025",
        slug: "event-loop-in-javascript-bf679b345f1f",
        category: "JavaScript"
    },
]