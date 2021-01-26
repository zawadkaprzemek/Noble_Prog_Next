import { NextRouter, useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";

const PostaciePage = () => {
  const router : NextRouter = useRouter();

  console.log("Router", router);

  return (
    <Layout title="Postacie">
      <ul>
        {sampleUserData
        .filter((x: User) => {
            if(router.query && router.query.humanity === 'human') {
                return x.human === true
            } else if ((router.query && router.query.humanity === 'non-human')) {
                return x.human === false
            } else {
                return false
            }

            return x.profession === router.query.profession;

        })
        .map((x: User, i: number) => {
          return (
            <li key={i}>
              <p>{x.name}</p>
              <p>{x.profession}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default PostaciePage;
