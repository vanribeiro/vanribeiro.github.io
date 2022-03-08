fetch('https://api.github.com/users/vanribeiro/repos')
    .then(res => res.json())
    .then(data => data.sort((x, y) => {
    if(x.updated_at < y.updated_at) return 1;
    if(x.updated_at > y.updated_at) return -1;
    return 0;
}).map(item => console.log(
    "name: " + item.name + 
    "\ndescription: " + item.description + 
    "\nurl: " + item.url +
    "\nupdated_at: " + item.updated_at
    )));