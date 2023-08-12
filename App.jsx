import StackNavigation from "./src/Navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./src/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}
