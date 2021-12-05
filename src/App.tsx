import Main from "./pages/main";
import MainLayout from "./hoc/MainLayout";

/**
 * App component
 *
 * @returns {JSX.Element}
 */

const App = (): JSX.Element => (
  <MainLayout>
    <Main />
  </MainLayout>
);

export default App;
