// Fetchig data from public api using async/await
console.log('Exercise:'+''+'Fetching the Data from Mock Api');

async function fetchUser() {
    try {
        console.log('Downlading start...')
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`); 
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error Message:',error)
    }
    console.log('Downloading Completed')
}

fetchUser()