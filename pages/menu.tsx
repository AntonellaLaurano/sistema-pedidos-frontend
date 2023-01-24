import { Layout } from 'components/layout';
import { MenuComponent } from 'components/menuComponent';
import Navbar from '../components/navbar/navbar';

const Menu = () => {
  return (
    <Layout>
      <Navbar />
      <MenuComponent />
    </Layout>
  )
}

export default Menu;
