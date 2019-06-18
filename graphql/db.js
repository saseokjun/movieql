export const people = [
  {
    id: 1,
    name: "sa",
    age: 31,
    gender: "male"
  },
  {
    id: 2,
    name: "kim",
    age: 20,
    gender: "female"
  },
  {
    id: 3,
    name: "lee",
    age: 29,
    gender: "male"
  },
  {
    id: 4,
    name: "park",
    age: 16,
    gender: "female"
  },
  {
    id: 5,
    name: "choi",
    age: 40,
    gender: "female"
  },
  {
    id: 6,
    name: "jung",
    age: 35,
    gender: "male"
  }
]

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id)
  return filteredPeople[0]
}

export default people