import characters from "./person";
import Team from "./Team";

const team = new Team();
team.addAll(...characters);

for (const key of team) {
  console.log(key);
}