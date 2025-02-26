import Layout from "./Layout";

export interface Menu {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

const Menus = () => {
  return (
    <Layout>
      <p>Menus Page</p>
      <div className=" mt-3">
        {/*         <NewMenu /> */}
        {/*  <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          {menus.map((ele) => {
            return <MenuItem menu={ele} key={ele.id} />;
          })}
        </div> */}
      </div>
    </Layout>
  );
};

export default Menus;
