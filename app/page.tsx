import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1 className="mt-5 text-3xl font-bold flex justify-center items-center">Main page</h1>
      <h2>Project Name</h2>
      <div className="flex gap-2">
      <Link href="/count-up">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-sky-200">
          カウントアップ
        </button>
      </Link>
      <Link href="/text-toggle">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-pink-200">
          テキスト表示切替
        </button>
      </Link>
      <Link href="/real-text">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-green-200">
          リアルタイムテキスト
        </button>
      </Link>
      <Link href="/color-change">
        <button className="border-2 border-black px-3 py-2 rounded-lg bg-green-200">
          ランダムカラー
        </button>
      </Link>
      </div>
    </div>
  );
}
