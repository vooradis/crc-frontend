window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://australia-southeast1-elevated-cargo-355220.cloudfunctions.net/backend-cloud-function';

const getVisitCount = () => {
    let count = 0;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called cloud function.");
        document.getElementById('visitor-count').innerHTML = "You're the visitor:" + response.currentVisitor;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
