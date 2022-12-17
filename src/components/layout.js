import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Menu from "./menu"

const Layout = ({ children }) => {
	return (
		<>
			<div className="grid grid-cols-12">
				<div className="col-span-3 mr-6 bg-stone-100 hidden md:block">
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
				<div className="col-span-12 md:col-span-9 pt-10">
					<div className="container md:mx-8">
						<input name="search" placeholder="Search ...." className="border-b border-b-dqa pb-2 focus:border-none" />
					</div>
					<div className="container">
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