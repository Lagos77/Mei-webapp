import "./Meetings.css";

const meetings = [
  { name: "Oración", day: "Miércoles", time: "19:00" },
  { name: "Jóvenes", day: "Viernes", time: "19:00" },
  { name: "Servicio", day: "Domingo", time: "11:00" },
];

export function Meetings() {
  return (
    <section className="meetings">
      <h2>Reuniones</h2>
      <div className="meetings-grid">
        {meetings.map((m) => (
          <div key={m.name} className="meeting-card">
            <h3>{m.name}</h3>
            <p>{m.day}</p>
            <p>{m.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
