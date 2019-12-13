import {RoomBooking} from "./room";

let arrivals: number[] = [1, 3, 5];
let departures: number[] = [2, 6, 10];
let k: number = 2;

let room = new RoomBooking(arrivals, departures, k);
console.log(room.canBooking());


