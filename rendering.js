const keyboard = document.querySelector(".keyboard");
const buttons = [
    [
        {value: "On", class: "start"},
        {value: "7", class: "number"},
        {value: "8", class: "number"},
        {value: "9", class: "number"},
        {value: "%", class: "operator"},
        {value: "√", class: "operator"},
    ],
    [
        {value: "+/-", class: "sign"},
        {value: "4", class: "number"},
        {value: "5", class: "number"},
        {value: "6", class: "number"},
        {value: "*", class: "operator"},
        {value: "/", class: "operator"},
    ],
    [
        {value: "MU", class: "MU"},
        {value: "1", class: "number"},
        {value: "2", class: "number"},
        {value: "3", class: "number"},
        {value: "+", class: "operator"},
        {value: "-", class: "operator"},
    ],
    [
        {value: "C", class: "delete"},
        {value: "0", class: "number"},
        {value: "00", class: "number"},
        {value: ".", class: "dot"},
        {value: "^", class: "operator"},
        {value: "=", class: "operate"},
    ],
]

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    keyboard.appendChild(row);

    for (let j = 0; j < 6; j++) {
        const button = buttons[i][j];
        const domButton = document.createElement("button");
        domButton.textContent = button.value;
        domButton.classList.add("button", `${button.class}`);
        row.appendChild(domButton);
    }
}