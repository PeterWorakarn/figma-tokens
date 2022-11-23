import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl text-red-500 w-full text-center">LOREM</h1>
        <p style={{ color: 'var(--primary-default)' }}>Import from Figma Tokens</p>
      </main>
    </div>
  )
}
