import members from "@/data/members.json";

export default function Home() {
  return (
    <main>
      <ul>
        {members.sites.map((member) => (
          <li key={member.website}>
            {member.name} - <a href={member.website}>{member.website}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
