interface Civilization<NotablePeopleTypes> {
  name: string;
  location: string;
  notablePeople: NotablePeopleTypes[];
}

interface Person {
  name: string;
  occupation: string;
}

type Architecht = Person & { occupation: "Architect" };
type Pharaoh = Person & { occupation: "Pharaoh" };
type Poet = Person & { occupation: "Poet" };
type Philosopher = Person & { occupation: "Philosopher" };
type General = Person & { occupation: "General" };

type NotablePeople<PersonType> = PersonType extends Person ? PersonType : never;

const egyptianCivilization: Civilization<Architecht | Pharaoh> = {
    name: "Egyptian",
    location: "Africa", 
    notablePeople: [
      {
        name: "Cleopatra",
        occupation: "Pharaoh"
      },
      {
        name: "Imhoptep",
        occupation: "Architect"
      }
    ]
  };

  const greekCivilalization: Civilization<Poet | Philosopher> = {
    name: "Greek",
    location: "Europe",
    notablePeople: [
      {
        name: "Homer",
        occupation: "Poet"
      },
      {
        name: "Socrates",
        occupation: "Philosopher"
      }
    ]
      };

    const romanCivilization: Civilization<General | Poet> = {
      name: "Roman",
      location: "Europe",
      notablePeople: [
        {
          name: "Julius Caesar",
          occupation: "General"
        },
        {
          name: "Virgil",
          occupation: "Poet"
        }
      ]
        };