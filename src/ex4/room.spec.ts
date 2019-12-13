import {expect} from 'chai';
import 'mocha';
import {RoomBooking} from "./room";

describe('Hotel Reservation', () => {
    it('Booking result 1', () => {
        let arrivals: number[] = [1, 3, 5];
        let departures: number[] = [2, 6, 10];
        let k: number = 1;

        let room = new RoomBooking(arrivals, departures, k);
        expect(room.canBooking()).to.equal(false);
    });

    it('Booking result 2', async () => {
        let arrivals: number[] = [1, 3, 5, 6, 9];
        let departures: number[] = [12, 6, 8, 7, 10];
        let k: number = 4;

        let room = new RoomBooking(arrivals, departures, k);
        expect(room.canBooking()).to.equal(true);
    });

    it('Booking result 3', async () => {
        let arrivals: number[] = [1, 3, 5];
        let departures: number[] = [2, 6, 10];
        let k: number = 2;

        let room = new RoomBooking(arrivals, departures, k);
        expect(room.canBooking()).to.equal(true);
    });
});
