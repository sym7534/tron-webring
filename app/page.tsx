import members from "@/data/members.json";
import WebringNavigator from "@/components/WebringNavigator";

export default function Home() {
  return (
    <main>
      <WebringNavigator sites={members.sites} />
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
