export default function debounce(func, wait) {     
    let timeoutId;
    console.log("debounce function called");
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), wait);
    };
}

