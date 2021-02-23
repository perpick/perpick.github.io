export type Auth = {
  user: {
    username: string;
    role: "USER" | "ADMIN";
  };
  token: {
    expiresIn: 0;
    accessToken: string;
  };
};
