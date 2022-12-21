import React, { useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { Link, graphql, useStaticQuery } from "gatsby"
import { Formik, Form, Field } from 'formik'

const SearchBar = () => {
   const data = useStaticQuery(graphql`
    query {
      search: localSearchPages {
         index
         store
       }
    }
  `)
   const [query, setQuery] = useState(null)
   const results = useFlexSearch(query, data.search.index, data.search.store)

   return (
      <div>
         <Formik
            initialValues={{ query: '' }}
            onSubmit={(values, { setSubmitting }) => {
               setQuery(values.query)
               setSubmitting(false)
            }}
         >
            <Form>
               <Field name="query" placeholder="Cari ...." className="w-full py-2 dark:bg-stone-800 border-b border-dqa outline-none" />
            </Form>
         </Formik>
         <ul className='mt-2'>
            {query ? <h4 className='font-semibold text-dqa'>Hasil pencarian untuk {query}.</h4> : null}
            {results.map(result => (
               <li key={result.id} className="content py-0.5 text-dqa hover:font-semibold hover:translate-x-2 duration-300">
                  <Link to={result.path}>{result.title}</Link>
               </li>
            ))}
         </ul>
      </div>
   )
}
export default SearchBar