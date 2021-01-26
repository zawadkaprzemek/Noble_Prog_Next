import Layout from '../../components/Layout'
import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';

const PostaciePage = () => (
  <Layout title="Postacie">
      <ul>
          {
              sampleUserData.map((x : User,i : number) => {
                return <li key={i}>
                    <p>{x.name}</p>
                    <p>{x.profession}</p>
                    <hr />
                </li>
              })
          }
      </ul>
  </Layout>
)

export default PostaciePage