import Header from "../Components/Header/Header";
import Create from "../Components/Create/Create";
import { Fragment, ReactElement } from "react";

const CreatePage = (): ReactElement => {
  return (
    <Fragment>
      <Header />
      <Create />
    </Fragment>
  );
};

export default CreatePage;
