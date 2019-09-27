import { adjectives, nouns } from './words';

export const generateSecret = () => {
  const randonNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randonNumber]} ${nouns[randonNumber]}`;
};
