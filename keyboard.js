let sentence = document.getElementById("sentence");
let mode = alphaLetters;
let textInput;

let twisters = {
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    peter: "Peter Piper picked a peck of pickled peppers\nA peck of pickled peppers Peter Piper picked",
    betty: "Betty Botter bought some butter\nBut she said the butter’s bitter",
    rain: "The rain in Spain stays mainly in the plain\nIn Hartford, Hereford, and Hampshire Hurricanes hardly happen",
    wood: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    can: "Can you can a can as a canner can can a can?",
    seashells: "She sells seashells by the seashore The seashells she sells are seashells she is sure.",
    menagerie: "Imagine an imaginary menagerie manager managing an imaginary menagerie."
}

document.getElementById('text-input').addEventListener('input', function () {
    textInput = document.querySelector("#text-input").value;
    getOutput(textInput);
});

document.querySelector("#clearButton").onclick = () => {
    console.log("clear button clicked");
    document.getElementById("sentence").value = "";
    document.getElementById("text-input").value = "";
};

document.querySelector("#twister").onchange = () => {
    var twister = Object.values(twisters)[document.getElementById("twister").value];
    if (document.getElementById("twister").value == "empty") {
        document.querySelector("#text-input").value = "";
        getOutput("");
    } else {
        document.querySelector("#text-input").value = twister;
        getOutput(twister);
    }
};

function getOutput(txt) {
    sentence.value = switched(txt, alphaLetters) + "\n\n\n" + switched(txt, alphaPhonics) + "\n\n\n" + switched(txt, letters);
}

function switched(txt, func) {
    sentence.value = '';

    params = {
        ignoreCase: true
    };
    if (txt.length == 1) {
        txt = txt + "/";
    }
    myRiString = new RiString(txt);
    var lower = myRiString.toLowerCase();
    var sent = Object.values(lower)[3];
    sent = sent.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, "");

    var newSent;
    newSent = sent.replaceAll("[^\\w?!#$*+-]+", "");
    newSent = newSent.replaceAll("\n", "/");
    newSent = newSent.replaceAll(" ", " ");

    var x;
    if (newSent.length > 1) {
        x = func(newSent).join("");
    } else {
        x = "";
    }

    x = x.replaceAll("/", "\n");
    return x;
}

function alphaLetters(str) {
    var letter = {
        a: "🅰️",
        b: "🅱",
        c: "©️",
        d: "🇩",
        e: "📧",
        f: "🎏",
        g: "❡",
        h: "♓",
        i: "📍",
        j: "🎷",
        k: "🎋",
        l: "👢",
        m: "Ⓜ️",
        n: "♑",
        o: "⭕",
        p: "🅿️",
        q: "🍳",
        r: "♌",
        s: "⚡",
        t: "🌴",
        u: "⛎",
        v: "✔️",
        w: "📈",
        x: "❌",
        y: "🍸",
        z: "💤",
        "!": "❕",
        "?": "❓",
        "#": "#️⃣",
        "*": "*️⃣",
        $: "💲",
        "+": "➕",
        "-": "➖",
        "1": "☝️",
        "2": "💕",
        "3": "☘️",
        "4": "👨‍👩‍👧‍👦",
        "5": "✋",
        "6": "🔯",
        "7": "🎰",
        "8": "🎱",
        "9": "9️⃣",
        "0": "💍",
        "/": "/"
    };
    if (str.length == 1) {
        return letter[str] || " ";
    }
    return str.split("").map(alphaLetters);
}


function alphaPhonics(str) {
    var phonic = {
        a: "🍏",
        b: "🦋",
        c: "🥫",
        d: "🐶",
        e: "🐘",
        f: "🦊",
        g: "🍇",
        h: "♥️",
        i: "🍦",
        j: "🧃",
        k: "🥝",
        l: "🍋",
        m: "🐁",
        n: "🪡",
        o: "🍊",
        p: "🍕",
        q: "👸",
        r: "🎀",
        s: "🌞",
        t: "🐢",
        u: "🦄",
        v: "🏐",
        w: "🐳",
        x: "❎",
        y: "🧶",
        z: "🦓",
        "!": "❗",
        "?": "❔",
        "#": "#️⃣",
        "*": "*️⃣",
        $: "💰",
        "+": "➕",
        "-": "➖",
        "1": "1️⃣",
        "2": "2️⃣",
        "3": "3️⃣",
        "4": "4️⃣",
        "5": "5️⃣",
        "6": "6️⃣",
        "7": "7️⃣",
        "8": "8️⃣",
        "9": "9️⃣",
        "0": "0️⃣",
        "/": "/"
    };
    if (str.length == 1) {
        return phonic[str] || " ";
    }
    return str.split("").map(alphaPhonics);
}

function letters(str) {
    var el = {
        a: "𝓪",
        b: "β",
        c: "𝓒",
        d: "ᗪ",
        e: "𝔢",
        f: "ℱ",
        g: "ｇ",
        h: "Ⓗ",
        i: "𝒾",
        j: "ｊ",
        k: "𝐊",
        l: "𝕃",
        m: "𝓶",
        n: "𝕟",
        o: "𝐎",
        p: "𝓟",
        q: "q",
        r: "ℝ",
        s: "𝔰",
        t: "Ŧ",
        u: "ⓤ",
        v: "ν",
        w: "Ŵ",
        x: "𝔁",
        y: "𝕐",
        z: "𝐙",
        "!": "!",
        "?": "?",
        "#": "＃",
        "*": "＊",
        $: "$",
        "+": "+",
        "-": "－",
        "1": "➀",
        "2": "❷",
        "3": "３",
        "4": "𝟜",
        "5": "❺",
        "6": "ᦆ",
        "7": "⑦",
        "8": "８",
        "9": "❾",
        "0": "𝟘",
        "/": "/"
    };
    if (str.length == 1) {
        return el[str] || " ";
    }
    return str.split("").map(letters);
}