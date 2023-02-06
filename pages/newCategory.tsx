import { Layout } from 'components/layout';
import { NewCategoryComponent } from 'components/newCategoryComponent';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

const NewProduct = () => {
  return (
    <Layout>
      <NewCategoryComponent />
    </Layout>
  )
}

export default NewProduct;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};
