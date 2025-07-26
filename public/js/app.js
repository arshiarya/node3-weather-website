// // // Fetch API example to get weather data

// // const weatherForm = document.querySelector('form')
// // const search = document.querySelector('input')
// // const messageOne = document.querySelector('#message-1')
// // const messageTwo = document.querySelector('#message-2')


// // weatherForm.addEventListener('submit', (e) => {
// //     e.preventDefault() // Prevent the default form submission behavior
// //     const location = search.value

// //     messageOne.textContent = 'Loading...'
// //     messageTwo.textContent = ''


// //     fetch('/weather?address=' + location).then((response) => {
// //         response.json().then((data) => {
// //             if (data.error) {
// //                 messageOne
// //             }
// //             else {
// //                 messageOne.textContent = data.location
// //                 messageTwo.textContent = data.forecast
// //             }
// //         });
// //     });
// // }
// // )

// const weatherForm = document.querySelector('form');
// const search = document.querySelector('input');
// const messageOne = document.querySelector('#message-1');
// const messageTwo = document.querySelector('#message-2');

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const location = search.value;

//     if (location === '') {
//         messageOne.textContent = '⚠️ Please enter a location.';
//         messageTwo.textContent = '';
//         return;
//     }

//     messageOne.textContent = 'Loading...';
//     messageTwo.textContent = '';

//     fetch('/weather?address=' + location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = '❌ ' + data.error;
//             } else {
//                 messageOne.textContent = data.location;
//                 messageTwo.textContent = data.forecast;
//             }
//         });
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    if (location === '') {
        messageOne.textContent = '⚠️ Please enter a location.';
        messageTwo.textContent = '';
        return;
    }

    messageOne.textContent = '⏳ Loading...';
    messageTwo.textContent = '';

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = '❌ ' + data.error;
                messageTwo.textContent = '';
            } else {
                messageOne.textContent = '📍 Location: ' + data.location;
                messageTwo.textContent = '🌤️ Forecast: ' + data.forecast;
            }
        });
    });
});
