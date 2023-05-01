const queries = 
["car", 
"carpet", 
"java", 
"javascript", 
"internet"];

const searchInput = document.getElementById('search');
const wordList = document.getElementById('wordList');

//filtering queries by letters
searchInput.addEventListener('input', (e) => {
    const searchLetter = e.target.value.toLowerCase();
    const filteredQueries = queries.filter(query => query.toLowerCase().startsWith(searchLetter));
    const queriesHTML = filteredQueries.map(query => `<li onclick="fillSearch('${query}')">${query}</li>`).join('');
    showQueries(queriesHTML);
});
  
//showing list of queries
function showQueries(queriesHTML){
    if (queriesHTML) {
      wordList.innerHTML = queriesHTML;
      wordList.style.display = 'block';
    } else {
      wordList.innerHTML = '';
      wordList.style.display = 'none';
    }
}

//auto-fill word from list on click
function fillSearch(query){
    searchInput.value = query;
    searchInput.focus();
}

//adding new words to array
 function addQuery(){
    const word = searchInput.value.trim();
    if (word) {
      if (!isWordInQueries(word)) {
        queries.push(word);
        searchInput.value = '';
        showQueries('');
        alert("New word added to the list: " + word);
    } else {
      alert("The word is already in the list!");
    }
  }
}

//check if new word os already in the list
function isWordInQueries(word){
    return queries.includes(word);
}  