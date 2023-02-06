import { Layout } from 'components/layout';
import { LoginComponent } from 'components/logInComponent';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

const LogIn = () => {
  return (
    <Layout>
      <LoginComponent />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let session = await getSession(context);
  if (session) {
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


export default LogIn;
