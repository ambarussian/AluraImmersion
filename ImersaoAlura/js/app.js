// DOM (Document Object Model) = all HTML elements must be completely loaded and available for manipulation via JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Handles navigation from login and signup pages to the index page

    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", function () {
            window.location.href = "../html/index.html"; // Redirects user to index.html
        });
    }

    const signupButton = document.getElementById("signupButton");
    if (signupButton) {
        signupButton.addEventListener("click", function () {
            window.location.href = "../html/index.html"; // Redirects user to index.html
        });
    }

    //Pop-up user's profile buttons
    const profileButton = document.getElementById("profileButton");
    const popup = document.getElementById("profilePopup");
    const close = document.querySelector(".close");

    // Opens the pop-up
    profileButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Closes the pop-up if user clicks on close button
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });

});

document.getElementById("backButton").addEventListener("click", function () {
    window.history.back();
});

//-------------------------------------------------------------------

// Navigates on main search page 
function search() {

    // Get the section element where the search results will be displayed
    let section = document.getElementById("result-search");

    // Get values of the search
    let searchSpace = document.getElementById("search-space").value;

    if (!searchSpace) {
        section.innerHTML = "<p class='diff-styling'>Not found! :(</p>";
        return;
    }

    let results = "";  // Initialize an empty string to store the generated
    let artist = "";
    let song = "";
    let tags = "";

    // Iterate over the data array and generate HTML for each search result
    for (let i of data) {

        artist = i.artist.toLocaleLowerCase();
        song = i.song.toLocaleLowerCase();
        tags = i.tags.toLowerCase();

        // Filters the search
        if (artist.includes(searchSpace) || song.includes(searchSpace) || tags.includes(searchSpace)) {
            results +=
                `
            <div class="result-item">
                <h2>
                    You've searched for 
                    <a href="#" target="_self">${i.song}</a> by
                    <a href="#" target="_self">${i.artist}.</a>
                </h2>
                <!-- <img src="../images/${i.image}" alt="${i.artist}"> -->
                <!-- Player de áudio -->
                <audio controls>
                    <source src="../audio/${i.audio}" type="audio/mp3">
                </audio>
                <p>${i.description}</p>
                <p>Support your favorite artists:</p>
                <ul>
                  <li><a href=${i.videoclip} target="_blank">Official Videoclip</a></li>
                  <li><a href=${i.instagram} target="_blank">Instagram</a></li>
                </ul>
            </div>
        `;
        }
    }

    // Check if no results were found
    if (!results) {
        section.innerHTML = "<p class='diff-styling'>Not found! :(</p>";

    } else {
        // Insert the generated HTML into the section element to display the results
        section.innerHTML = results;
    }
}