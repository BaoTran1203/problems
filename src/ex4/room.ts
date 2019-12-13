export class RoomBooking {
    private readonly arrivals: number[] = [];
    private readonly departures: number[] = [];
    private readonly numOfRooms: number = 0;

    constructor(arrivals: number[], departures: number[], numOfRooms: number) {
        this.arrivals = arrivals;
        this.departures = departures;
        this.numOfRooms = numOfRooms;
    }

    /**
     * Sort map by key
     * @param events
     */
    private sortEvent(events: Map<number, number>): Map<number, number> {
        let entries = [...events.entries()];
        let sortMap = entries.sort((a, b) => a[0] - b[0]);
        return new Map(sortMap);
    }

    /**
     * - Initialize a collection to store booking events
     * - Increase or decrease in the number of rooms required depends on the arrival and departure dates
     * - Calculate the total number of rooms to provide and compare with the number of rooms available
     * - Time complexity: O(n*log(n)) average case and O(n^2) worst case
     * - Memory complexity: O(n)
     */
    public canBooking(): boolean {
        // Collection of events
        let events: Map<number, number> = new Map();
        let numOfBookings: number = this.arrivals.length;
        for (let i = 0; i < numOfBookings; i++) {
            let arrival: number = this.arrivals[i];
            let departure: number = this.departures[i];

            // Add one during an arrival
            let current = events.get(arrival);
            events.set(arrival, !current ? 1 : ++current);

            // Remove one during a departure
            current = events.get(departure);
            events.set(departure, !current ? -1 : --current);
        }

        let sortedEvents = this.sortEvent(events);
        let count = 0;
        for (let entry of sortedEvents) {
            count += entry[1];

            // If the current count exceeds the maximum number of rooms
            if (count > this.numOfRooms) {
                return false;
            }
        }

        return true;
    }
}
