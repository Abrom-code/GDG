const users = [
  { name: 'John', age: 25, email: 'ex@mail' },
  { name: 'Jane', age: 24, email: 'ex@mail' },
  { name: 'Bob', age: 30, email: 'ex@mail' },
  { name: 'Alice', age: 29, email: 'ex@mail' }
];

export default function App(){
  return(
    <div>
      <header>
        <h1>Users</h1>
        <main>
          <UserCard {...users[0]}/>
          <UserCard {...users[1]}/>
          <UserCard {...users[2]}/>
          <UserCard {...users[3]}/>

        </main>
      </header>
    </div>
  )
}
function UserCard({name, age, email}){
  return(
    <div className="user-card">
      <h2>NAME : {name}</h2>
      <p>AGE : {age}</p>
      <p>EMAIL : {email}</p>
    </div>
  )
}