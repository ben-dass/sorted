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
		<div className={classes.appBody}>
			<SideNav />

			<Switch>
				<Route path="/" exact>
					<div className={classes.content}>
						<TitleBar category="Welcome" />
						<Welcome />
					</div>
				</Route>
				<Route path="/Settings/General">
					<div className={classes.content}>
						<TitleBar category="Settings" />
						<Settings category="General" />
					</div>
				</Route>
				<Route path="/Settings/Collections">
					<div className={classes.content}>
						<TitleBar category="Settings" />
						<Settings category="Collections" />
					</div>
				</Route>
				<Route path="/Settings/Images">
					<div className={classes.content}>
						<TitleBar category="Settings" />
						<Settings category="Images" />
					</div>
				</Route>
				<Route path="/Settings/About">
					<div className={classes.content}>
						<TitleBar category="Settings" />
						<Settings category="About" />
					</div>
				</Route>

				{categories.map((category) => (
					<Route
						key={Math.ceil(Math.random() * 1000)}
						path={`/${category.name}`}
						render={(props) => (
							<div className={classes.content}>
								<TitleBar {...props} category={category.name} />
							</div>
						)}
					/>
				))}
			</Switch>
		</div>
	);
}

export default App;
