import MealsProvider from "./components/providers/MealsProviders";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
