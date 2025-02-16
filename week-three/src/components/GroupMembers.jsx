export default function GroupMember({ members }) {
  return (
    <div>
      <h1>Group Members</h1>
      <ul>
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
