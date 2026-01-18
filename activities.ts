import {
  Skier,
  SpaEnthusiast,
  Foodie,
  ThrillSeeker,
  GuestWithActivity
} from "./guests";

export interface Activity<AttendeeType> {
  name: string;
  location: string;
  attendees: AttendeeType[];
}

const skiLesson: Activity<
  GuestWithActivity<Skier | ThrillSeeker>
> = {
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

const cookingClass: Activity<GuestWithActivity<Foodie>> = {
  name: "Thai Cooking Class",
  location: "West Kitchen",
  attendees: [
    {
      name: "Leon Vida",
      interest: "restaurants"
    }
  ]
};

const massage: Activity<GuestWithActivity<SpaEnthusiast>> =
  {
    name: "Hot Stone Massage",
    location: "Lotus Spa Lounge",
    attendees: [
      {
        name: "Jordan James",
        interest: "spas"
      }
    ]
  };