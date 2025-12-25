import {prismaClient} from "@repo/prisma/client";

export default async function Home() {
  const res = await prismaClient.user.findMany() || null;
  return (
    <div>
      Hello frontend,

      {
        res === null ? <p>No user found</p> : <div>
          {
            res.map((el) => (
              <div key={el.id}>
                {el.username}  
                {el.password}
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}


export const dynamic = "force-dynamic";
