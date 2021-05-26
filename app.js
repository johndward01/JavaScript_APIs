console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

document.getElementById("submitSearch").addEventListener("click", () => {
    const img = document.querySelector("img");
    const search = document.getElementById("searchWord").value;

    fetch(
        "https://api.giphy.com/v1/gifs/translate?api_key=jzY3QKTEtRkwId2RE7jqO9iaV2AkiWwM&s=" +
        search,
        { mode: "cors" }
    )
        .then((response) => response.json())
        .then((res) => {
            img.src = res.data.images.original.url;
        })
        .catch((response) => console.log(response));
});

// let btn = document.getElementById("theButton");
// btn.addEventListener(onclick, function showGIF(event) {
//     const img = document.querySelector("img");
//     const inputElementValue = document.getElementById("theInput");
//     fetch("https://api.giphy.com/v1/gifs/translate?api_key=jzY3QKTEtRkwId2RE7jqO9iaV2AkiWwM&s=cats", { mode: 'cors' })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (response) {
//             img.src = response.data.images.original.url;
//         })
//         .catch(function (message) {
//             console.log(message);
//         });
// });