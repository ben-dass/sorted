import React from "react";
import { Switch, Route } from "react-router-dom";
import SideNav from "./Components/SideNav/SideNav";

import { useCategories } from "./Contexts/CategoriesContext";
import TitleBar from "./Components/TitleBar/TitleBar";
import Settings from "./Pages/Settings/Settings";

import classes from "./App.module.scss";
import Welcome from "./Pages/Welcome/Welcome";

function App() {
	const categoriesContext = useCategories();
	const categories = categoriesContext.categories;

	return (
		<>
			<SideNav />

			<Switch>
				<Route path="/" exact>
					<TitleBar category="Welcome" />
					<div className={classes.appBody}>
						<Welcome />
					</div>
				</Route>
				<Route path="/Settings/General">
					<TitleBar category="Settings" />
					<div className={classes.appBody}>
						<Settings category="General" />
					</div>
				</Route>
				<Route path="/Settings/Collections">
					<TitleBar category="Settings" />
					<div className={classes.appBody}>
						<Settings category="Collections" />
					</div>
				</Route>
				<Route path="/Settings/About">
					<TitleBar category="Settings" />
					<div className={classes.appBody}>
						<Settings category="About" />
					</div>
				</Route>

				{categories.map((category) => (
					<Route
						key={Math.ceil(Math.random() * 1000)}
						path={`/${category.name}`}
						render={(props) => (
							<TitleBar {...props} category={category.name} />
						)}
					/>
				))}
			</Switch>
		</>
	);
}

export default App;
