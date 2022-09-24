// 👇️ named export
export interface IPost {
  id: string;
  owner: {
    firstName: string;
    lastName: string;
  };
  image: string;
  text: string;
}
