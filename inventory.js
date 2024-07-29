function inventoryList() {
    //Plan
    // Define object with add, remove, getList()
    // return object above
    // In above object define listSaved to log all names
    // In Add method: validate if name is empty then just return
    // Else, listSaved.push(name)
    // Add validation length of listSaved. If length of listSaved is === 10 just return  to finish that flow
    // In Remove() method: we need to find the name, get index and remove from the list
    // If index is null just return
    // Getlist() method: just return listSaved

    return {
        listSaved: [],
        add: function (name) {

            name = name.toString().trim();

            if (name.length === 0) {
                return;
            }

            if (this.listSaved.length === 10) {
                return;
            }

            this.listSaved.push(name);
        },
        remove: function (name) {
            const nameIndex = this.listSaved.findIndex((item) => item.toLowerCase() === name.toLowerCase());
            this.listSaved.splice(nameIndex, 1);

        },
        getList: function () {
            return this.listSaved;
        }
    }

}

// const inventory = inventoryList();
// console.log(inventory);
// inventory.add("Shirt");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon");
// inventory.add("Pantalon11");
// inventory.getList();
// inventory.remove("Shirt");
// inventory.getList();
