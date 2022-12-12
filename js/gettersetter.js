const myCat = {
    _name: 'Snickers',
    get name()
    {
      return this._name
    },
    set name(newName){
      //Verify that newName is a non-empty string before setting as name property
      if (typeof newName === 'string' && newName.length > 0){
        this._name = newName; 
      } else {
        console.log("ERROR: name must be a non-empty string"); 
      }
    }
}
