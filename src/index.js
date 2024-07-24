// 
const init = () => {
  const inputForm = document.querySelector("form");
  if (!inputForm) {
    console.error("Form not found");
    return;
  }

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");

    const input = document.querySelector("input#searchByID");
    if (!input) {
      console.error("Input not found");
      return;
    }

    console.log("Input value:", input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        if (!title || !summary) {
          console.error("Title or summary element not found");
          return;
        }

        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
console.log("DOMContentLoaded event listener added");