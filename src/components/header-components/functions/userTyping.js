import handleOnChange from "./handleOnChange";
var interval;

async function userTyping(setValue, action, value, limit, isTyping) {
    isTyping(true);
    clearTimeout(interval);
    interval = setTimeout(() => handleOnChange(setValue, action, value, limit, isTyping), 1800);
}

export default userTyping;
