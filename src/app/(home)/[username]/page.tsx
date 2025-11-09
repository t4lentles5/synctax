type Params = Promise<{ username: string }>;

export default async function UserPage({ params }: { params: Params }) {
  const { username } = await params;

  return (
    <>
      <h1>{username}</h1>
    </>
  );
}
