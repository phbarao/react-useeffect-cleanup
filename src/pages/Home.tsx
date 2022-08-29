import { useFetch } from '../hooks/useFetch';

interface Repo {
  id: string;
  name: string;
}

export function Home() {
  const [repos, loading, error] = useFetch<Repo[]>(
    'https://api.github.com/users/phbarao/repos',
    []
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <ul>
      {repos?.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}
