import characters_json from "../data/characters.json";

export function createCharacter(id) {
  return characters_json.find((c) => c.id === id);
}
