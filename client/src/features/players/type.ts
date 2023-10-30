export type Player = {
  id: number;
  name: string;
  age: number;
  email: string;
  avatar: string;
  password: string;
};

export type PlayerID = Player['id'];
