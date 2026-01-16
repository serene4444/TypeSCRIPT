var skiLesson = {
    name: "Steeps Clinic",
    location: "Matterhorn Gondola",
    attendees: [
        {
            name: "Jessica Sweet",
            interest: "skiing"
        },
        {
            name: "Jason Williams",
            interest: "adrenaline sports"
        }
    ]
};
var cookingClass = {
    name: "Thai Cooking Class",
    location: "West Kitchen",
    attendees: [
        {
            name: "Leon Vida",
            interest: "restaurants"
        }
    ]
};
var massage = {
    name: "Hot Stone Massage",
    location: "Lotus Spa Lounge",
    attendees: [
        {
            name: "Jordan James",
            interest: "spas"
        }
    ]
};
var Hotel = /** @class */ (function () {
    function Hotel(id, name, cost, category) {
        this.amenities = [];
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
    }
    Hotel.prototype.addAmenity = function (amenity) {
        this.amenities.push(amenity);
    };
    Hotel.prototype.describeHotel = function () {
        return "The ".concat(this.category, " category ").concat(this.name, " costs $").concat(this.cost, " and includes the following amenities: ").concat(this.amenities.join(", "), ".");
    };
    return Hotel;
}());
var peakLodge = new Hotel("06", "Peak Lodge", 250, "silver");
peakLodge.addAmenity("breakfast");
peakLodge.addAmenity("wifi");
var description = peakLodge.describeHotel();
console.log(description);