let searchBar = document.querySelector('input');
let table = document.querySelector('table');
let rows = [...document.querySelectorAll('tbody tr')];
let tbody = document.querySelector('tbody');

function filterData(e){
    let searchText= searchBar.value.toLowerCase();
    let filterList = rows.filter((idx) => {
        return idx.firstElementChild.innerText.toLowerCase().includes(searchText);
    });
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    for(let i=0; i<filterList.length; i++){
        tbody.appendChild(filterList[i]);
    }
}

searchBar.addEventListener('keyup', filterData);