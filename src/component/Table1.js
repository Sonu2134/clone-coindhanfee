import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA1 from './MOCK_DATA1.json'
import { Columnb } from './columnb'
import './table.css'
const Table1 = () => {

    const columnb = useMemo(() => Columnb, [])
    const data1 = useMemo(() => MOCK_DATA1, [])


    const tableInstance = useTable({
        columnb,
        data1,

    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        <div>


            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {
                                                column.render('Header')
                                            }
                                        </th>
                                    ))
                                }

                            </tr>
                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Table1
