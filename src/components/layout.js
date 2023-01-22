import React, { useEffect, useState } from "react"
import createPersistedState from 'use-persisted-state'
import { themeChange } from "theme-change"
import SearchBar from "./search"
import Menu from "./menu"


export default function Layout({ children }) {

	const [navbarOpen, setNavbarOpen] = useState(false)
	const menuToggle = () => { setNavbarOpen(!navbarOpen) }

	const [searchOpen, setSeacrhOpen] = useState(false)
	const seacrhToggle = () => { setSeacrhOpen(!searchOpen) }

	const useThemeState = createPersistedState('themeDark');
	const [themeDark, setThemeDark] = useThemeState(false)
	const themeToggle = () => { setThemeDark(!themeDark) }
	useEffect(() => { themeChange(false) }, [])

	var year = new Date().getFullYear()

	return (
		<div>
			<div className="h-full md:flex md:flex-wrap bg-white dark:bg-stone-800 dark:text-white duration-300 ease-in">
				<div className="mt-6 mr-6 inline-flex gap-2 items-center absolute right-3 z-20 md:hidden">

					{/* Theme Toggle */}
					<div className="absolute right-8">
						<button onClick={themeToggle} data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
							{themeDark
								? <svg viewBox="0 0 24 24" fill="currentColor" className="-mr-1 -mb-1 w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"></path></svg>
								: <>
									☀
								</>
							}
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
				<div className={`md:w-3/12 md:mr-6 md:max-w-xs md:h-auto absolute md:fixed md:top-0 md:bottom-0 scroll-bar md:overflow-scroll bg-stone-100 dark:bg-stone-700 z-10 w-full min-h-screen h-max duration-300 ease-out ${navbarOpen ? "transform translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
					<menu className="container bg-stone-100 dark:bg-stone-700 text-black dark:text-white duration-300 ease-in"  >
						<Menu />
					</menu>
				</div>

				{/* Main */}
				<div className="md:h-auto absolute md:left-[320px] pt-10 bg-white dark:bg-stone-800 text-black dark:text-white duration-300 ease-in">

					{/* Mobile search */}
					<div className="container md:mx-8 md:hidden">
						<SearchBar />
					</div>

					<div className="container mx-8 pt-3 pr-28 hidden md:block">

						{/* Theme Toggle */}
						<div className="absolute right-20 top-13 pt-2">
							<button onClick={themeToggle} data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
								{themeDark
									? <svg viewBox="0 0 24 24" fill="currentColor" className="-mr-1 -mb-1 w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"></path></svg>
									: <>
										☀
									</>
								}
							</button>
						</div>

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
		</div>
	)
}