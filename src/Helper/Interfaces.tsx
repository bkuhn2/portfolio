export interface Project {
  name: string,
  abstract: string,
  tech: string[],
  githubURL: string,
  deployedURL: string | undefined,
  img: string,
  notes: string | undefined,
  id: number
}