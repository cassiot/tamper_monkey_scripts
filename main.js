//Events

const changeEvent = new Event('change', { bubbles: true });

const mouseClickEvent = new MouseEvent('click', {
    bubbles: true, // Event bubbles up the DOM tree
    cancelable: true,
    view: window});

const mouseDownEvent = new MouseEvent('mousedown', {
    bubbles: true, // Event bubbles up the DOM tree
    cancelable: true,
    view: window});

const keyUpEvent = new KeyboardEvent('keyup', {
    key: ' ',
    keyCode: 32,
    code: 'Space',
    bubbles: true,
    view: window});

const keyDownEventEnter = new KeyboardEvent('keydown', {
    key: 'Enter',
    keyCode: 13,
    cancellable: false,
    code: 'Enter',
    bubbles: true});

//Functions

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}