import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  return (
    <div>
      <h1>Welcome to Counseling App</h1>
      <p>This is the homepage</p>
    </div>
  );
}
