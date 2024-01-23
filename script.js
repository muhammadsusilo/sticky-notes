const appSticky = document.getElementById("sticky");
const addNoteSticky = document.querySelector(".add-note")

function getNote() {
    return JSON.parse(localStorage.getItem("stickyFile-notes") || "[]")
}

function saveNote(notes) {
    localStorage.setItem("stickyFile-notes", JSON.stringify(notes))
}

function createNote(id, content) {
    const textArea = document.createElement("textarea");

    textArea.classList.add("note");
    textArea.value = content;
    textArea.placeholder = "Empty Sticky Note";

    textArea.addEventListener("change", () => {
        updateNote(id, textArea.value);
    });

    return textArea;
}


function addNote() {

}

function updateNote(id, newContent) {
    console.info("update");
    console.info(id, newContent);
}

function deleteNote(id, element) {

}