$(document).ready(function () {
  var rows = 1;
  var columns = 6;

  var currTile;
  var otherTile;
  var turns = 0;

  // Initialize the 5x5 board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = $("<img>").attr("src", "./images/blank.jpg");

      // DRAG FUNCTIONALITY
      tile
        .on("dragstart", dragStart)
        .on("dragover", dragOver)
        .on("dragenter", dragEnter)
        .on("dragleave", dragLeave)
        .on("drop", dragDrop)
        .on("dragend", dragEnd);

      $("#board").append(tile);
    }
  }

  // Pieces
  let pieces = [];
  for (let i = 1; i <= rows * columns; i++) {
    pieces.push(i.toString());
  }
  pieces.reverse();

  for (let i = 0; i < pieces.length; i++) {
    let j = Math.floor(Math.random() * pieces.length);

    // Swap
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (let i = 0; i < pieces.length; i++) {
    let tile = $("<img>").attr("src", "./images/" + pieces[i] + ".png");

    // DRAG FUNCTIONALITY
    tile
      .on("dragstart", dragStart)
      .on("dragover", dragOver)
      .on("dragenter", dragEnter)
      .on("dragleave", dragLeave)
      .on("drop", dragDrop)
      .on("dragend", dragEnd);

    $("#pieces").append(tile);
  }

  // DRAG TILES
  function dragStart() {
    currTile = $(this);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {}

  function dragDrop() {
    otherTile = $(this);
  }

  function areImagesOrdered(imageArray) {
    for (let i = 0; i < imageArray.length - 1; i++) {
      // Extract index from current and next image URLs
      const currentIndex = getImageIndex(imageArray[i]);
      const nextIndex = getImageIndex(imageArray[i + 1]);

      // Check if the indices are not in ascending order
      if (currentIndex > nextIndex) {
        return false;
      }
    }
    return true;
  }

  function getImageIndex(imageUrl) {
    // Extract the index from the image URL
    const regex = /\/(\d+)\.png/;
    const match = imageUrl.match(regex);

    if (match && match[1]) {
      return parseInt(match[1], 10);
    }

    // Return -1 if no index found
    return -1;
  }

  function buildImageArray() {
    const imageArray = [];

    // Use a jQuery selector to target the images
    $("#board img").each(function () {
      const imageUrl = $(this).attr("src");
      imageArray.push(imageUrl);
    });

    return imageArray;
  }

  function checkWin() {
    if (
      $("#board img").length == 6 &&
      $("#board").find('img[src$="./images/blank.jpg"]').length == 0
    ) {
      selectedImages = buildImageArray();
      if (areImagesOrdered(selectedImages)) {
        alert("Vous avez gagné");
      } else {
        alert("Vous avez perdu cette fois-ci");
      }
      $("#board img").draggable({
        disabled: true,
      });
    }
  }

  function dragEnd() {
    if (currTile.attr("src").includes("blank")) {
      return;
    }

    let currImg = currTile.attr("src");
    let otherImg = otherTile.attr("src");
    currTile.attr("src", otherImg);
    otherTile.attr("src", currImg);

    turns += 1;
    $("#turns").text(turns);
    checkWin();
  }

  // Attach click event to the button
  $("#refreshButton").on("click", function () {
    // Use location.reload() to refresh the page
    location.reload();
  });
});
