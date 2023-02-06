import { Layout } from 'components/layout';
import { NewProductComponent } from 'components/newProductComponent';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

const NewProduct = () => {
  return (
    <Layout>
      <NewProductComponent />
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
