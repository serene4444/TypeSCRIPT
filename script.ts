import { Activity } from "./activities";
import { Guest } from "./guests";

type HotelCategory = "gold" | "silver" | "bronze";

class Hotel<AttendeeType> {
  readonly id: string;
  readonly name: string;
  cost: number;
  amenities: string[] = [];
  category: HotelCategory;
  activities: Activity<AttendeeType>[] = [];

  constructor(
    id: string,
    name: string,
    cost: number,
    category: HotelCategory
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.category = category;
  }

  addAmenity(amenity: string) {
    this.amenities.push(amenity);
  }
  describeHotel(): string {
    return `The ${this.category} category ${
      this.name
    } costs $${
      this.cost
    } and includes the following amenities: ${this.amenities.join(
      ", "
    )}.`;
  }
  addActivity(activity: Activity<AttendeeType>) {
    this.activities.push(activity);
  }
}

const peakLodge = new Hotel(
  "06",
  "Peak Lodge",
  250,
  "silver"
);

const hiking: Activity<Guest> = {
  name: "Eastlake Summit Hike",
  location: "Eastlake Trailhead",
  attendees: [
    { name: "John Wilson", interest: "adrenaline sports" }
  ]
};

peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
peakLodge.addActivity(hiking);
let description = peakLodge.describeHotel();
console.log(description);