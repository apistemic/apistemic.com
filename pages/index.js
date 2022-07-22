import Image from 'next/image'

export default function Home() {
  return (
      <div className="grid h-screen place-items-center">
          <div className="text-center">
              <div>
                  <Image src="/logo-squared.png" alt="Logo of apistemic" height="100" width="100" />
                  <h1>apistemic</h1>
                  <h2>access the world&#39;s data</h2>
              </div>
              <div className="mt-12 text-sm">
                  © Copyright 2022, <a href="https://loreyventures.com">Lorey Ventures</a>.
              </div>
          </div>
      </div>
  )
}
