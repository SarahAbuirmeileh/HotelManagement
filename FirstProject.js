class Hotel{
    #minFloor;
    #maxFloor;
    rooms = [];
    constructor (address, numOfRooms, rooms,minFloor, maxFlorr ){
        this.#maxFloor=maxFlorr;
        this.#minFloor=minFloor;
        this.address=address;
        this.numOfRooms=numOfRooms;
        this.rooms=rooms;
    }

    printAdvertisement(){
        console.log("The address for our hotel is: " +this.address )
        console.log("The number of rooms : " + this.numOfRooms)
    }

    listBookedRooms(){
        for (let i =0; i<this.rooms.length; i++){
            if (this.rooms[i].isBooked==true){
                this.rooms[i].printRoom();
                console.log("");
            }
        }
    }
}

class Room {
    #isBooked = false;
    constructor(floorNum, roomNum, price,isBooked){
        this.#isBooked=isBooked;
        this.floorNum=floorNum;
        this.roomNum=roomNum;
        this.price=price;
    }

    printRoom(){
        console.log("The floor number is: " + this.floorNum)
        console.log("The room number is: " + this.roomNum)
        console.log("The price for this room is: " + this.price)
        if (this.#isBooked ==true)
            console.log("This room is booked")
        else 
        console.log("This room isn't booked yet")
    }

    book(){
        this.#isBooked=true;
    }

    get isBooked(){
        return this.#isBooked;
    }
}

class SleepingRooms extends Room{
    constructor(personCapacity, floorNum, roomNum, price,isBooked){
        super(floorNum,roomNum,price,isBooked);
        this.personCapacity=personCapacity;
    }
    printRoom(){
        super.printRoom()
        console.log("Person capacity:" + this.personCapacity)
    }
}

class RoomWithView extends Room{
    constructor(view, numberOfBeds, floorNum, roomNum, price,isBooked){
        super(floorNum,roomNum,price,isBooked);
        this.numberOfBeds = numberOfBeds;
        this.view=view;
    }
    printRoom(){
        super.printRoom();
        console.log("The view for this room: " + this.view)
        console.log("The number of beds is :" + this.numberOfBeds)
    }
}




arr = [new Room(1,1,100,false),
       new RoomWithView("Sea view", 2 , 1,2, 500, true),
       new SleepingRooms(4,2,3,400,false)]

h = new Hotel("Hebron",  3, arr, 1, 2);

h.printAdvertisement();
h.listBookedRooms();
h.rooms[0].book();
console.log("")
h.listBookedRooms()