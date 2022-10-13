const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confrimAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName("input");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // 불필요한 공백을 지워줌
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    parseInt.ratingValue < 1 ||
    parseInt.ratingValue < 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confrimAddMovieButton.addEventListener("click", addMovieHandler);
