import CustomHTTP from "./custom-http.js";

const customHttp = new CustomHTTP();

document.getElementById("getBtn").addEventListener("click", get);
document.getElementById("postBtn").addEventListener("click", post);
document.getElementById("putBtn").addEventListener("click", put);
document.getElementById("deleteBtn").addEventListener("click", deleteuser);

// GET REQUEST
function get() {
  const albums = customHttp.get("https://jsonplaceholder.typicode.com/albums");
  albums
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

const data = {
  title: "Custom title"
};

// POST REQUEST
function post() {
  customHttp
    .post("https://jsonplaceholder.typicode.com/albums", data)
    .then(response => console.log(`Album added successfully`))
    .catch(error => console.error(error));
}

// PUT REQUEST
function put() {
  customHttp
    .put("https://jsonplaceholder.typicode.com/albums/3", data)
    .then(response => console.log(`Album updated successfully.`))
    .catch(error => console.error(error));
}

// DELETE REQUEST
function deleteuser() {
  customHttp
    .delete("https://jsonplaceholder.typicode.com/albums/7")
    .then(response => console.log("Album deleted successfully"))
    .catch(error => console.error(error));
}
