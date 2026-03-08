export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
