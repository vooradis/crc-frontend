const functionApi = 'https://elevated-cargo-355220-gateway-id-32ma8k0d.ts.gateway.dev/counter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called serverless function.");
        document.getElementById('visitor-count').innerHTML = "You're the visitor: " + response.currentVisitor;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
