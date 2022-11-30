const people = require('../data/people.json');


function getAllPeople() {
    return people;
}

function getPersonById(id) {
    return people.person.find(p => p.id === id);
}





module.exports = {
    getAllPeople,
    getPersonById
};  
