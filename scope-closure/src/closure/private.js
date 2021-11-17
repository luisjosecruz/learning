const person = () => {
    let saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    };
};

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Luis Mart");
console.log(newPerson.getName());

