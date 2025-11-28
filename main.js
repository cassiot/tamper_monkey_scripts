//Events

const changeEvent = new Event('change', { bubbles: true });


//Functions

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}