function Profile({ person, size }) {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{person.who}</h2>
        <img
          className="avatar"
          src={person.imageId}
          alt={person.who}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.Awards}</b>({person.awardsdetail})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <Profile
        person={{
          who: "Maria Skłodowska-Curie",
          profession: " physicist and chemist",
          awards: 4,
          awardsdetail:
            "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
          discovered: "polonium(element)",
          imageId: "https://i.imgur.com/szV5sdGs.jpg",
        }}
        size={70}
      />
      <Profile
        person={{
          who: "Katsuko Saruhashi",
          profession: "geochemist",
          awards: 2,
          awardsdetail: "Miyake Prize for geochemistry, Tanaka Prize",
          discovered: "a method for measuring carbon dioxide in seawater",
          imageId: "https://i.imgur.com/YfeOqp2s.jpg",
        }}
        size={100}
      />
    </div>
  );
}
