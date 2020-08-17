import Head from 'next/head'
import Link from 'next/link'
import Icon from '../static/icon.png'

export default function Page1() {
  return (
    <div>
      <p>This is home page</p>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      <Link href="/page2" passHref>
        <a>page2로 이동</a>
      </Link>
      <style jsx>{`
        p {
          color: blue;
          font-size: 18pt;
        }
      `}</style>
    </div>
  );
}
