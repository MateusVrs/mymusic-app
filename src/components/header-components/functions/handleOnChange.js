async function handleOnChange(setValue, action, searchValue, limit, isTyping) {
    const returnedMusics = await action(searchValue, limit);
    if (returnedMusics !== null) {
        setValue(returnedMusics);
        setTimeout(() => isTyping(false), 1500);
    }
}

export default handleOnChange;
