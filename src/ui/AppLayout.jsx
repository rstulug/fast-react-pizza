import Loader from '../Loader';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl sm:mx-auto ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
