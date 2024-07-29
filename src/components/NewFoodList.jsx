export default function NewFoodList({ foodNewData }) {
  return (
    <div>
      {foodNewData.map((post) => (
        <h1 key={post.id}>
          {post.id}, {post.todo}
        </h1>
      ))}
    </div>
  );
}
