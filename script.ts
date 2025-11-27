class Hotel {
  readonly id: string;
  readonly name: string;
  cost: number;
  amenities: string[] = [];

  constructor(id: string, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  addAmenity(amenity: string) {
    this.amenities.push(amenity);
  }
  describeHotel(): string {
    return `The ${this.name} costs $${
      this.cost
    } and includes the following amenities: ${this.amenities.join(
      ", "
    )}.`;
  }
}

const peakLodge = new Hotel("06", "Peak Lodge", 250);
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
let description = peakLodge.describeHotel();
console.log(description);
