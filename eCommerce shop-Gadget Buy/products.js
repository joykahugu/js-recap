fetch('https://fakestoreapi.com/products')
  .then(response => { 
    if (!response.ok) {
        throw new Error (`HTTP error! status: ${response.status}`);
    }
    return response.json(); })
  .then(data => console.log(data));