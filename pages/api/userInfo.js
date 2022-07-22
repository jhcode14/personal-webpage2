export default async function handler(req, res) {
  const data = await getUserInfoData();
  res.status(200).json(data);
}

export async function getUserInfoData() {
  const response = {
    species: "homo-sapien sapiens",
    name: "Jason Hsu",
    age: 21,
    gender: "Male",
    pronouns: ["He", "Him"],
    hobbies: ["Yelling at CSS", "Crying from CSS"],
    skills: [
      "javascript",
      "typescript",
      "nodejs",
      "reactjs",
      "nextjs",
      "python",
      "jupyter-notebook",
    ],
    github: "https://github.com/jhcode14",
  };
  return response;
}
