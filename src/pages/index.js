import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
	return (
		<Layout>
			<div className="content min-h-screen md:px-8 pt-2">
				<h2 className="text-dqa">Dokumentasi</h2>
				<h3>Halaman Admin Darul Quran Aceh</h3>
				<>
					Dokumentasi ini dibuat untuk memudahkan admin dalam pengelolaan
					website
					<Link href="https://dqa.sch.id" className="text-blue-600 hover:italic">
						{" "}Darul Quran Aceh. {" "}
					</Link>
					Aplikasi ini berisi seluruh dokumentasi terkait halaman admin dan
					bagaimana cara menggunakan halaman admin dalam pengelolaan website
					<Link href="https://dqa.sch.id" className="text-blue-600 hover:italic">
						{" "}Darul Quran Aceh. {" "}
					</Link>
				</>
			</div>
		</Layout>
	)
}

export default IndexPage

export const Head = () => <title>DQA - Dokumentasi</title>