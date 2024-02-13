import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[20px] p-24">
      <h1 className="text-[50px]">Homework 3</h1>
      <div className="flex gap-8">
        <Link href="/counter">Home</Link>
        <Link href="/users">Option-1</Link>
        <Link href="/option">Option-2</Link>
        <Link href="/option3">Option-3</Link>
        <Link href="/option4">Option-4</Link>
      </div>
      <h1 className="text-[50px] mt-19">Homework - Next</h1>
    </main>
  );
}
