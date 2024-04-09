import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Touzafi", "Tobani", "Koose", "Kinkira", "Dawadawa jollof", "Bambara beans"]

const MealsProvider = ({children}) => {

    // eslint-disable-next-line no-unused-vars
    const [meals, setMealsList] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}} >
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;