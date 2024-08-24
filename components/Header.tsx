import { SlMenu } from "react-icons/sl";

export default function Header() {
  return (
    <main className="bg-slate-700 w-full h-16 flex items-center justify-between px-4">
      <section>
        <button className="">
          <SlMenu className="w-6 h-6" />
        </button>
      </section>
      <section>
        <article className="bg-green-900 text-xs p-2 rounded-full">SA</article>
      </section>
    </main>
  );
}
