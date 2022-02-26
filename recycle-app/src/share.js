class UserList
{
    //global User List that holds an array of User objects
    constructor()
    {
        this._userList = []
    }
    //get user object
    getUserlist = () =>{return this._userList}
    //add a user
    addUser = (user)=>
    {
        if(user instanceof User)
        {
            this._userList.push(user)
        }
    }
    //remove a user
    removeUser = (user) =>
    {
        if(user instanceof User)
        {
            try
            {
                let index = this._userList.findIndex((obj) => obj === user);
                this._userList.splice(index,1);
            }
            finally
            {
                return
            }
        }
    }
    //from data method to store in Local storage
    fromData(dataObject)
    {
        let data = dataObject._userList;
        this._userList = data; // could try this._allPOI = []; but this seems safer

        for(let i = 0; i < data.length; ++i){
            let newUser =data[i];
            this._userList[i] = newUser;
        };

    }

}
class User
{
    //User object that contains all neccessary information about the user
    constructor(name,location,pc,range)
    {
        this._name = name//name of user
        this._location = location//location of user/ address
        this._pc = pc//post code 
        this._range = range//search area around the user. Essentially only show results for pickups that are near the range of the user
        this._listings = [] //Waste they want to be picked up 
        this._pickups = []//any scheduled waste they are supposed to pick up
    }
    //getters
    getName = () =>{return this._name}
    getLocation = () =>{return this._location}
    getpc = () =>{return this._pc}
    getRange = () =>{return this._range}
    getListings = () =>{return this._listings}
    getPickups = () =>{return this._pickups}
    //setters
    modName =(newName) =>
    {
        this._name = newName
    }

    modLocation =(newLocation) =>
    {
        this._location = newLocation
    }

    modpc =(newpc) =>
    {
        this._pc = newpc
    }

    modRange =(newRange) =>
    {
        this._range = newRange
    }
    //add to the listing
    addListing = (newListing) =>
    {
        this._listings.push(newListing)
    }
    //remove a listing
    removeListing = (Listing) =>
    {
        if(Listing instanceof Waste)
        {
            try
            {
                let index = this._listings.findIndex((obj) => obj === Listing);
                this._listings.splice(index,1);
            }
            finally
            {
                return
            }
        }
    }
    //add a pickup
    addPickup = (newPickup) =>
    {
        this._pickups.push(newPickup)
    }
    //remove a pickup
    removePickup = (Pickup) =>
    {
        if(Pickup instanceof Waste)
        {
            try
            {
                let index = this._pickups.findIndex((obj) => obj === Pickup);
                this._pickups.splice(index,1);
            }
            finally
            {
                return
            }
        }
    }
    fromData(dataObject){
        this._name = dataObject._name
        this._location = dataObject._location
        this._pc = dataObject._pc
        this._range = dataObject._range
        this._listings = dataObject._listings
        this._pickups = dataObject._pickups
    }
}

class Waste
{
    constructor(user,type,location,pc,qty,time)
    {
        this._user = user
        this._type = type
        this._location = location
        this._pc = pc 
        this._qty = qty
        this._time = time
    }
    //getters
    getUser = () =>{return this._user}
    getType = () =>{return this._type}
    getLocation = () =>{return this._location}
    getpc = () =>{return this._pc}
    getQty = () =>{return this._qty}
    getTime = () =>{return this._time}
    //setters
    modUser=(newUser) => {
        if(newUser instanceof User)
        {
            this._user = newUser
        }

    }
    modType =(newType) =>
    {
        this._type = newType
    }
    modLocation = (newLocation)=>
    {
        this._location = newLocation
    }
    modpc = (newpc) =>
    {
        this._pc = newpc
    }
    modqty =(newQty)=>
    {
        this._qty =newQty
    }
    modTime = (newTime) =>
    {
        this._time = newTime    
    }
    //from data method for local storage 
    fromData(dataObject){
        this._user = dataObject._user
        this._type = dataObject._type
        this._pc = dataObject._pc
        this._location = dataObject._location
        this._qty = dataObject._qty
        this._time = dataObject._time
    }
}
class GlobalListings
{
    constructor()
    {
        this._globalListing = []
    }
    getglobalListing  = () =>{return this._globalListing}
    addListing = (newListing)=>
    {
        if(newListing instanceof Waste)
        {
            this._globalListing.push(newListing)
        }
    }
    removeListing = (Listing) =>
    {
        if(Listing instanceof Waste)
        {
            try
            {
                let index = this._globalListing.findIndex((obj) => obj === Listing);
                this._globalListing.splice(index,1);
            }
            finally
            {
                return
            }
        }
    }
    //store data to local storage
    fromData(dataObject)
    {
        let data = dataObject._globalListing;
        this._globalListing = data; // could try this._allPOI = []; but this seems safer

        for(let i = 0; i < data.length; ++i){
            let newListing=data[i];
            this._globalListing[i] = newListing;
        };

    }
}
//Local storage functions
/**
 * checkLSData function
 * Used to check if any data in LS exists at a specific key
 * @param {string} key LS Key to be used
 * @returns true or false representing if data exists at key in LS
 */
 function checkLSData(key) {
    if (localStorage.getItem(key) != null) {
        return true;
    }
    return false;
}
/**
 * retrieveLSData function
 * Used to retrieve data from LS at a specific key. 
 * @param {string} key LS Key to be used
 * @returns data from LS in JS format
 */
function retrieveLSData(key) {
    let data = localStorage.getItem(key);
    try {
        data = JSON.parse(data);
    }
    catch (err) { }
    finally {
        return data;
    }
}
/**
 * updateLSData function
 * Used to store JS data in LS at a specific key
 * @param {string} key LS key to be used
 * @param {any} data data to be stored
 */
function updateLSData(key, data) {
    let json = JSON.stringify(data);
    localStorage.setItem(key, json);
}