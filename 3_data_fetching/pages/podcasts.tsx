import Layout from '../components/Layout'
import fs from 'fs';
import path from 'path';

const Podcasts : React.FC<{test: string, data: Array<any>}> = ({test, data}) => (
  <Layout title="Home | Next.js + TypeScript Example">

      <h1>Treść: {test}</h1>

      <ul>
          {
              data.map((x: any, i: number) => {
                  return <li key={i}>
                    <h3>{x.title}</h3>
                    <p dangerouslySetInnerHTML={{__html: x.description}}></p>
                    <hr />
                  </li>
              })
          }
      </ul>

  </Layout>
)

export async function getServerSideProps() {

    let data : any = [];

    try {
        let file = await fs.promises.readFile(path.resolve('./data/podcasts.json'), 'utf8');
        data = JSON.parse(file).items
        
    } catch (error) {
    }

    return {
        props: {
            test: "Noble Prog Course",
            data: data
        }
    }
}

export default Podcasts
