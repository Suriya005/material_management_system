import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'


export default function index() {
  return (
    <DefaultLayout>
        <h1>Hello Next.js</h1>
        <div className=" flex flex-row">
          <div className="basis-1/2">
            <div className="justify-center items-center">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">John</td>
                  <td className="border px-4 py-2">25</td>
                  <td className="border px-4 py-2">dawda</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="justify-center items-center">
              <h1>test</h1>
            </div>
          </div>
        </div>
      </DefaultLayout>
  )
}
