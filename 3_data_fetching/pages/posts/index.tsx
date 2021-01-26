import Layout from '../../components/Layout'
import { _getPosts } from '../../utils/database'

const IndexPage : React.FC<{data: any}> = ({data}) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Posts</h1>
    <ul>
        {
            data.map((x: any, index: number) => {
                return <li key={index}>
                        <h2>{x.post_title}</h2>
                        <hr />
                </li>
            })
        }
    </ul>
  </Layout>
)

export async function getStaticProps() {

    const data : Array<any> = await _getPosts();
    const rawData = data.map((x: any) => {
        return {
            post_title: x.post_title,
            post_content: x.post_content
        }
    })
  
  return {
    props: {
        data: rawData
    },
    revalidate: 1
  }
}


export default IndexPage
