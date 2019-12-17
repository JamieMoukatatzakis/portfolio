// Element selector function
const selectElement = (s) => document.querySelector(s);

// Open Burger Menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

// Close Burger menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});