import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SearchBar from "./search"
import Menu from "./menu"

const Layout = ({ children }) => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	}

	return (
		<>
			<div className="md:grid grid-cols-12">
				<div className="mt-6 mr-6 absolute right-0 z-20">
					<button onClick={handleToggle} className="md:hidden block">
						{navbarOpen
							? <svg
								viewBox="0 0 16 16"
								fill="currentColor"
								class="h-5 cursor-pointer pt-1 pr-1 duration-700"
							>
								<path
									d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
								/>
							</svg>
							: <svg
								class="h-6 w-6 cursor-pointer duration-500"
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
				<div className={`md:col-span-3 md:mr-6 bg-stone-100 md:block absolute md:relative z-10 w-full md:w-auto duration-1000 ease-in-out ${navbarOpen ? "transform translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
					<div className="container">
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
					<div className="container md:mx-8">
						<SearchBar />
					</div>
					<div className="container duration-500">
						{children}
					</div>
					<footer>
						<div className="flex justify-center mt-16 py-4 text-[14px]">
							<div>2018 - 2023 &copy; Darul Quran Aceh.</div>
						</div>
					</footer>
				</div>
			</div>
		</>
	)
}

export default Layout