
const names = ["Joel","Lynnea","Lilah","Daryl","Daniela","Eric","Roy","Nathan","Shelby"];

async function fetchData() {
    try {
        // Fetch the JSON file
        const response = await fetch('santa-list.json'); // Adjust the path to your JSON file
        const data = await response.json();

        // Now 'data' is a JavaScript object representing the content of the JSON file
        // console.log(data);
        return data;
        // You can use 'data' as needed
        // For example, update the webpage content based on the loaded data
        // document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw new Error('bad things');
    }

}

let loginButton = document.querySelector("button");
let myParagraph = document.querySelector("p");
async function login(){
    const santaMap = await fetchData();
    const username = prompt("Please enter your name.");
    if(username){
        let found = false;
        let userSlice = username.slice(0,3);
        userSlice = userSlice.toLowerCase();
        for(let i =0; i<names.length;i++){
            let storedName = names[i];
            let storedSlice = storedName.slice(0,3);
            storedSlice = storedSlice.toLowerCase();

            if(userSlice===storedSlice){
                found = true;
                myParagraph.textContent = `Hi ${storedName}, this Christmas you are the secret Santa for ${santaMap[storedName]}. Have fun chosing a great gift for them!`;

                break;
            }
        }
        if(!found){
            myParagraph.textContent = `Uh oh, ${username}! Looks like you are not on Santa\'s list... please contact the administrator at sheppard.joel@gmail.com`;
        }
    }
}
loginButton.onclick = () =>{
    login();
}

function getRandom(max){
    return Math.floor(Math.random()*max);
}
