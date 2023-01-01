import React, { useState, useEffect } from "react"
import { themeChange } from 'theme-change'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SearchBar from "./search"
import Menu from "./menu"

const Layout = ({ children }) => {

	const [navbarOpen, setNavbarOpen] = useState(false)
	const [searchOpen, setSeacrhOpen] = useState(false)

	const menuToggle = () => {
		setNavbarOpen(!navbarOpen)
	}

	const seacrhToggle = () => {
		setSeacrhOpen(!searchOpen)
	}

	useEffect(() => {
		themeChange(false)
	}, [])

	var year = new Date().getFullYear()

	return (
		<>
			<div className="h-full md:grid grid-cols-12 bg-white dark:bg-stone-800 dark:text-white duration-300 ease-in">
				<div className="mt-6 mr-6 absolute right-3 z-20 md:hidden block">

					{/* Theme Toggle */}
					<div className="absolute right-10">
						{/* {getTheme} */}
						<button data-toggle-theme="light,dark" data-act-class="ACTIVECLASS">
							<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-current"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-current"></path></svg>
						</button>
					</div>

					{/* Toggle Navbar */}
					<button onClick={menuToggle}>
						{navbarOpen
							? <svg
								viewBox="0 0 16 16"
								fill="currentColor"
								className="h-5 cursor-pointer pt-1 pr-1 duration-700"
							>
								<path
									d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
								/>
							</svg>
							: <svg
								className="h-6 w-6 cursor-pointer duration-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						}
					</button>
				</div>

				{/* Left Navbar */}
				<div className={`md:col-span-3 md:mr-6 md:block w-full min-h-screen h-max md:w-auto md:h-auto absolute md:relative z-10  duration-[400ms] ease-in ${navbarOpen ? "transform translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
					<div className="container h-full bg-stone-100 dark:bg-stone-700 text-black dark:text-white duration-300 ease-in">
						<div className="pb-8">
							<Link to="/">
								<StaticImage src="../images/logo.png" alt="Darul Quran Aceh" placeholder="blurred"
									height={90} />
							</Link>
						</div>
						<Menu />
					</div>
				</div>
				<div className="md:col-span-9 pt-10">

					{/* Mobile search */}
					<div className="container md:mx-8 md:hidden">
						<SearchBar />
					</div>

					<div className="container mx-8 pt-3 pr-28 hidden md:block">

						{/* Theme Toggle */}
						<button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" className="absolute right-20 top-13 pt-2">
							<svg viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-current"></path><path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-current"></path></svg>
						</button>

						{/* Toggle Search */}
						<button onClick={seacrhToggle} className="py-2 border-b w-full border-dqa text-gray-400 text-left">
							Cari ....
						</button>
					</div>

					{/* Content */}
					<div className="container min-h-screen">
						{children}
					</div>

					<footer>
						<div className="flex justify-center mt-2 py-4 text-[14px] z-10">
							<div>2018 - {year} &copy; Darul Quran Aceh.</div>
						</div>
					</footer>
				</div>

				{/* Search Modal */}
				<div
					className={`${searchOpen ? null : 'hidden'} fixed insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto z-20 h-full w-full`}
				>
					<div className="relative top-16 mx-auto p-5 border max-w-2xl shadow-lg rounded-md bg-white dark:bg-stone-800">
						<div className="mt-6 mr-6 absolute right-5 top-1">
							<button onClick={seacrhToggle}>
								<svg
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-5 cursor-pointer pt-1 pr-1 text-dqa"
								>
									<path
										d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
									/>
								</svg>
							</button>
						</div>
						<div className="px-6">
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout