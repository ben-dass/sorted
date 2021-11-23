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
					<div className={classes.contentBody}>
						<TitleBar category="Welcome" />
						<div className={classes.content}>
							<Welcome />
						</div>
					</div>
				</Route>
				<Route path="/Settings/General">
					<div className={classes.contentBody}>
						<TitleBar category="Settings" />
						<div className={classes.content}>
							<Settings category="General" />
						</div>
					</div>
				</Route>
				<Route path="/Settings/Collections">
					<div className={classes.contentBody}>
						<TitleBar category="Settings" />
						<div className={classes.content}>
							<Settings category="Collections" />
						</div>
					</div>
				</Route>
				<Route path="/Settings/Images">
					<div className={classes.contentBody}>
						<TitleBar category="Settings" />
						<div className={classes.content}>
							<Settings category="Images" />
						</div>
					</div>
				</Route>
				<Route path="/Settings/addImages">
					<div className={classes.contentBody}>
						<TitleBar category="Settings" />
						<div className={classes.content}>
							<Settings category="Images" addImages={true} />
						</div>
					</div>
				</Route>
				<Route path="/Settings/About">
					<div className={classes.contentBody}>
						<TitleBar category="Settings" />
						<div className={classes.content}>
							<Settings category="About" />
						</div>
					</div>
				</Route>

				{categories.map((category) => (
					<Route
						key={Math.ceil(Math.random() * 1000)}
						path={`/${category.name}`}
						render={(props) => (
							<div className={classes.contentBody}>
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
