import apiID from "./api.js";

const leadEl = document.querySelector(".advice-card__lead");
const textEl = document.querySelector(".advice-card__text");
const diceEl = document.querySelector(".advice-card__dice");

const ACTION = {
    click: "click",
    start: "DOMContentLoaded"
};


async function getAdvice(param) {
    const serve = await fetch(apiID);
    const parse = await serve.json();
    setAdvice({
        ...parse.slip
    });
}

async function setAdvice(param) {
    const { id, advice } = param;
    const title = `ADVICE #${
        id.toString().padStart(3, "0")
    }`;
    
    leadEl.textContent = title;
    textEl.textContent = `“${advice}”`;
}

window.addEventListener(ACTION.start, () => getAdvice());
diceEl.addEventListener(ACTION.click, () => getAdvice());